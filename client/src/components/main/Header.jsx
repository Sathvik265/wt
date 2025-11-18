import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { logoutUser } from '@/store/auth'
import { Heart, LogOut, User } from 'lucide-react'
import { toast } from 'sonner'

export const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuthenticated, user } = useSelector(state => state.auth)

  const handleAuthAction = () => {
    if (isAuthenticated) {
      // Logout
      dispatch(logoutUser()).then((data) => {
        if (data?.payload?.success) {
          toast.success('Logged out successfully')
          navigate('/auth/login')
        }
      })
    } else {
      // Navigate to login
      navigate('/auth/login')
    }
  }

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <div 
            className='flex items-center gap-2 cursor-pointer' 
            onClick={() => navigate('/')}
          >
            <div className='flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg'>
              <Heart className='w-6 h-6 text-white' fill='white' />
            </div>
            <span className='text-xl font-bold text-gray-900'>Physio Aid</span>
          </div>

          {/* User Info & Auth Button */}
          <div className='flex items-center gap-4'>
            {isAuthenticated && user && (
              <div className='flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-lg'>
                <User className='w-4 h-4 text-blue-600' />
                <span className='text-sm font-medium text-gray-700'>
                  {user.name}
                </span>
              </div>
            )}
            
            <Button 
              onClick={handleAuthAction}
              variant={isAuthenticated ? 'outline' : 'default'}
              className='gap-2 cursor-pointer'
            >
              {isAuthenticated ? (
                <>
                  <LogOut className='w-4 h-4' />
                  Logout
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
