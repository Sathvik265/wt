import React from 'react'
import { Heart, Mail, Phone } from 'lucide-react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-gray-900 text-gray-300 mt-auto'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Brand Section */}
          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              <div className='flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg'>
                <Heart className='w-6 h-6 text-white' fill='white' />
              </div>
              <span className='text-xl font-bold text-white'>Physio Aid</span>
            </div>
            <p className='text-sm text-gray-400'>
              Your trusted companion for healthcare recommendations and specialist guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-white font-semibold mb-4'>About</h3>
            <p className='text-sm text-gray-400'>
              Physio Aid helps you identify the right remedies and specialists based on your symptoms, 
              promoting early diagnosis and preventive healthcare.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-white font-semibold mb-4'>Contact</h3>
            <div className='space-y-3'>
              <div className='flex items-center gap-2 text-sm'>
                <Mail className='w-4 h-4 text-blue-400' />
                <span>support@physioaid.com</span>
              </div>
              <div className='flex items-center gap-2 text-sm'>
                <Phone className='w-4 h-4 text-blue-400' />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400'>
          <p>&copy; {currentYear} Physio Aid. All rights reserved. | Empowering preventive healthcare.</p>
        </div>
      </div>
    </footer>
  )
}
