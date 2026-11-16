'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn } from '@/components/animations/fade-in';
import { TEAM_MEMBERS } from '@/lib/constants';

export function Team() {
  return (
    <section id='team' className='px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
      <div className='mx-auto max-w-7xl'>
        <div className='section-shell p-8 sm:p-10 lg:p-14'>
          <FadeIn>
            <div className='mx-auto mb-12 max-w-2xl text-center'>
              <Badge variant='secondary' className='mb-5 rounded-full px-4 py-2'>
                Meet the team
              </Badge>
              <h2 className='section-title'>The founders behind RidePaddy</h2>
              <p className='section-copy mt-5'>
                A focused team making private transport in Nigeria easier to
                find, compare and book.
              </p>
            </div>
          </FadeIn>

          <div className='mx-auto grid max-w-2xl gap-5 sm:grid-cols-2'>
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true, margin: '-10%' }}>
                <Card className='h-full rounded-[1.75rem] border-white/70 bg-white/85 shadow-[0_18px_50px_rgba(20,61,71,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(20,61,71,0.12)]'>
                  <CardContent className='p-6 text-center'>
                    <div className='mx-auto mb-5 h-24 w-24 overflow-hidden rounded-full ring-4 ring-primary/10'>
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className='h-full w-full object-cover'
                      />
                    </div>
                    <h3 className='text-lg font-heading font-semibold text-secondary'>
                      {member.name}
                    </h3>
                    <p className='mt-1 text-sm font-medium text-muted-foreground'>
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
