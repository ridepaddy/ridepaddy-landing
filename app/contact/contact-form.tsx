'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { contactSchema, type ContactFormData } from '@/lib/validations';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Unable to send message.');
      }

      reset();
      toast.success('Message sent', {
        description: 'RidePaddy has received your message.',
      });
    } catch (error) {
      toast.error('Message failed', {
        description:
          error instanceof Error ? error.message : 'Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <div className='grid gap-4 sm:grid-cols-2'>
        <div>
          <Input
            {...register('name')}
            placeholder='Your name'
            className='h-12 rounded-2xl bg-white'
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && (
            <p className='mt-1 text-xs text-destructive'>{errors.name.message}</p>
          )}
        </div>
        <div>
          <Input
            {...register('email')}
            type='email'
            placeholder='Your email'
            className='h-12 rounded-2xl bg-white'
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && (
            <p className='mt-1 text-xs text-destructive'>{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <Input
          {...register('subject')}
          placeholder='Subject'
          className='h-12 rounded-2xl bg-white'
          aria-invalid={Boolean(errors.subject)}
        />
        {errors.subject && (
          <p className='mt-1 text-xs text-destructive'>{errors.subject.message}</p>
        )}
      </div>

      <div>
        <textarea
          {...register('message')}
          placeholder='Tell us what you need'
          rows={6}
          className='flex min-h-36 w-full rounded-[1.25rem] border border-input bg-white px-4 py-3 text-sm outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50'
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && (
          <p className='mt-1 text-xs text-destructive'>{errors.message.message}</p>
        )}
      </div>

      <Button
        type='submit'
        size='lg'
        className='rounded-full px-6'
        disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className='h-4 w-4 animate-spin' />
            Sending
          </>
        ) : (
          <>
            Send message
            <Send className='h-4 w-4' />
          </>
        )}
      </Button>
    </form>
  );
}
