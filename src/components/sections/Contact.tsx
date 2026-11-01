import React, { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Send, CheckCircle2, Mail, MapPin, Clock, AlertCircle, Sparkles, RefreshCw, Database } from 'lucide-react';

export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactProps {
  initialSubject?: string;
  onSubmitted?: (data: ContactFormData) => void;
}

export const Contact: React.FC<ContactProps> = ({ initialSubject, onSubmitted }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    subject: initialSubject || '',
    message: '',
  });

  const [honeypot, setHoneypot] = useState<string>(''); // Spam protection bot trap
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormData, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionState, setSubmissionState] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [confirmedId, setConfirmedId] = useState<string | null>(null);

  useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({ ...prev, subject: initialSubject }));
      setSubmissionState('idle');
    }
  }, [initialSubject]);

  const validateField = (field: keyof ContactFormData, value: string): string | undefined => {
    switch (field) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 2) return 'Full name must be at least 2 characters';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Email address is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please provide a valid email address (e.g. name@domain.com)';
        }
        return undefined;
      case 'subject':
        if (!value.trim()) return 'Subject line is required';
        if (value.trim().length < 2) return 'Subject must be at least 2 characters';
        return undefined;
      case 'message':
        if (!value.trim()) return 'Project details are required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return undefined;
      default:
        return undefined;
    }
  };

  const validateAll = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    (Object.keys(formData) as (keyof ContactFormData)[]).forEach((field) => {
      const err = validateField(field, formData[field]);
      if (err) newErrors[field] = err;
    });

    setErrors(newErrors);
    setTouched({
      fullName: true,
      email: true,
      subject: true,
      message: true,
    });
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (field: keyof ContactFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const err = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: err }));
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const err = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: err }));
    }
    if (submissionState !== 'idle') {
      setSubmissionState('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent duplicate submissions

    if (!validateAll()) {
      setSubmissionState('error');
      setErrorMessage('Please correct the highlighted fields before submitting.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _hp: honeypot,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setSubmissionState('error');
        setErrorMessage(
          result.error ||
            'Failed to save submission. Please check your Supabase configuration or try again.'
        );
        return;
      }

      // Confirmed database insertion success
      setConfirmedId(result.submissionId || null);
      setSubmissionState('success');
      if (onSubmitted) onSubmitted(formData);

      // Reset form after verified success
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: '',
      });
      setErrors({});
      setTouched({});
    } catch (err: unknown) {
      console.error('Contact form submission error:', err);
      setSubmissionState('error');
      setErrorMessage(
        'Network error: Unable to reach the server. Please check your connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-28 border-t border-white/[0.08] bg-[#0A1020] scroll-mt-16 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/[0.08] rounded-full blur-[170px] pointer-events-none"
      />

      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101A2D] border border-white/10 text-xs font-semibold text-[#60A5FA] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>Initiate Collaboration</span>
          </div>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 text-balance"
          >
            Let's Start a Conversation
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed text-balance">
            Submit your project requirements below. Inquiries are securely validated by our server endpoint and recorded directly into Supabase.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start relative z-10">
          {/* Left Column: Direct Agency Channels */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]" />
                <span>Accepting New Projects for Q2/Q3</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                Direct Contact Channels
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Connect directly with our engineering and design leads. We prioritize clear technical scoping and transparent communication.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl luxury-card flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/25 text-[#3B82F6] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#94A3B8] font-medium">Direct Inquiries</div>
                  <div className="text-sm font-semibold text-white mt-0.5">vibecodeto.100k@gmail.com</div>
                </div>
              </div>

              <div className="p-5 rounded-2xl luxury-card flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/25 text-[#3B82F6] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#94A3B8] font-medium">Response SLA</div>
                  <div className="text-sm font-semibold text-white mt-0.5">&lt; 24 business hours guaranteed</div>
                </div>
              </div>

              <div className="p-5 rounded-2xl luxury-card flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/25 text-[#3B82F6] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#94A3B8] font-medium">Studio Location</div>
                  <div className="text-sm font-semibold text-white mt-0.5">San Francisco, CA · Remote Worldwide</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#080D1A] border border-white/10 text-xs text-[#94A3B8] leading-relaxed flex items-start gap-3.5 shadow-inner">
              <Database className="w-5 h-5 text-[#3B82F6] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5 font-semibold">Supabase Backend Connected</strong>
                <span>
                  Posts directly to <code className="text-[#60A5FA] font-mono">/api/contact</code> and records into the{' '}
                  <code className="text-[#60A5FA] font-mono">contact_submissions</code> table with Row Level Security.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Controlled Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-11 rounded-2xl luxury-card shadow-2xl relative">
              {/* Submission State: SUCCESS */}
              {submissionState === 'success' ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="text-center py-10 space-y-5 animate-in fade-in zoom-in-95 duration-300"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Inquiry Saved to Supabase!</h3>
                  <p className="text-sm text-[#94A3B8] max-w-md mx-auto leading-relaxed">
                    Your submission was securely verified and recorded into the{' '}
                    <code className="text-white font-mono bg-[#080D1A] px-1.5 py-0.5 rounded border border-white/10">contact_submissions</code> table. Our senior engineer will respond shortly.
                  </p>
                  {confirmedId && (
                    <div className="text-xs font-mono text-[#60A5FA] bg-[#080D1A] py-2 px-4 rounded-xl border border-white/10 inline-block shadow-inner">
                      Record UUID: {confirmedId}
                    </div>
                  )}
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSubmissionState('idle');
                        setConfirmedId(null);
                      }}
                      leftIcon={<RefreshCw className="w-3.5 h-3.5" />}
                    >
                      Submit Another Inquiry
                    </Button>
                  </div>
                </div>
              ) : (
                /* FORM INTERFACE */
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Top Error Banner */}
                  {submissionState === 'error' && errorMessage && (
                    <div
                      role="alert"
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300 space-y-1 animate-in fade-in"
                    >
                      <div className="flex items-center gap-2 font-semibold text-red-200">
                        <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                        <span>Submission Notice</span>
                      </div>
                      <p className="pl-6 text-[#94A3B8]">{errorMessage}</p>
                    </div>
                  )}

                  {/* Honeypot hidden input for spam bots */}
                  <input
                    type="text"
                    name="_hp"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Full Name <span className="text-[#3B82F6]">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        aria-required="true"
                        aria-invalid={Boolean(touched.fullName && errors.fullName)}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                        placeholder="e.g. Alex Rivera"
                        value={formData.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        onBlur={() => handleBlur('fullName')}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#080D1A] border text-sm text-white placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/30 transition-all duration-200 disabled:opacity-60 shadow-inner ${
                          touched.fullName && errors.fullName
                            ? 'border-red-500/80 ring-1 ring-red-500/30'
                            : 'border-white/10 hover:border-white/20'
                        }`}
                      />
                      {touched.fullName && errors.fullName && (
                        <p id="fullName-error" className="text-[11px] text-red-400 mt-1.5 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Email Address <span className="text-[#3B82F6]">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        aria-required="true"
                        aria-invalid={Boolean(touched.email && errors.email)}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#080D1A] border text-sm text-white placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/30 transition-all duration-200 disabled:opacity-60 shadow-inner ${
                          touched.email && errors.email
                            ? 'border-red-500/80 ring-1 ring-red-500/30'
                            : 'border-white/10 hover:border-white/20'
                        }`}
                      />
                      {touched.email && errors.email && (
                        <p id="email-error" className="text-[11px] text-red-400 mt-1.5 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Subject Line <span className="text-[#3B82F6]">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      aria-required="true"
                      aria-invalid={Boolean(touched.subject && errors.subject)}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                      placeholder="e.g. Website Development Inquiry"
                      value={formData.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      onBlur={() => handleBlur('subject')}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#080D1A] border text-sm text-white placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/30 transition-all duration-200 disabled:opacity-60 shadow-inner ${
                        touched.subject && errors.subject
                          ? 'border-red-500/80 ring-1 ring-red-500/30'
                          : 'border-white/10 hover:border-white/20'
                      }`}
                    />
                    {touched.subject && errors.subject && (
                      <p id="subject-error" className="text-[11px] text-red-400 mt-1.5 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Project Details &amp; Timeline <span className="text-[#3B82F6]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      aria-required="true"
                      aria-invalid={Boolean(touched.message && errors.message)}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      placeholder="Tell us about your project vision, target audience, budget bracket, and timeline..."
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#080D1A] border text-sm text-white placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/30 transition-all duration-200 resize-none disabled:opacity-60 shadow-inner ${
                        touched.message && errors.message
                          ? 'border-red-500/80 ring-1 ring-red-500/30'
                          : 'border-white/10 hover:border-white/20'
                      }`}
                    />
                    {touched.message && errors.message && (
                      <p id="message-error" className="text-[11px] text-red-400 mt-1.5 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button with Loading State */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    disabled={isSubmitting}
                    className="w-full justify-center"
                    rightIcon={<Send className="w-4 h-4" />}
                  >
                    {isSubmitting ? 'Recording to Supabase...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
