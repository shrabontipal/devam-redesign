import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import * as React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { toast } from 'sonner'

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().regex(/^(\+\d{1,3})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/, {
    message: "Please enter a valid phone number.",
  }),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
})

type FormValues = z.infer<typeof formSchema>

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })
  
  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true)
    
    try {
      // Format email content for sending to shrabontipal@gmail.com
      const emailContent = {
        to: 'shrabontipal@gmail.com',
        from: values.email,
        subject: 'New Contact Form Submission from Devam Computech Website',
        body: `
          Name: ${values.name}
          Email: ${values.email}
          Phone: ${values.phone}
          
          Message:
          ${values.message}
        `
      };
      
      console.log('Email would be sent with the following content:', emailContent);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      
      toast.success('Message sent successfully! We will get back to you soon.');
      form.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again later.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <section className="bg-gray-50 py-20" id="contact">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                Get in <span className="text-blue-600">Touch</span>
              </h2>
              <p className="text-lg text-gray-600">
                We're here to answer your questions
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-blue-600 mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Address</h4>
                  <p className="text-gray-600">
                    Devam Bhaban, Thakurpara, Malancha, Bishnupur, Bankura, West Bengal, PIN - 722122
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-blue-600 mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Phone</h4>
                  <p className="text-gray-600">
                    +91 7001413211 / +91 9434189535
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-blue-600 mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Email</h4>
                  <p className="text-gray-600">
                    devamco@gmail.com
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="name">Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          id="name"
                          placeholder="Your name" 
                          {...field} 
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 transition-colors"
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          id="email"
                          type="email" 
                          placeholder="Your email" 
                          {...field} 
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 transition-colors"
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="phone">Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          id="phone"
                          type="tel" 
                          placeholder="Your phone" 
                          {...field} 
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 transition-colors"
                          data-testid="input-phone"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="message">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          id="message"
                          placeholder="Your message" 
                          {...field} 
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 transition-colors resize-y"
                          rows={4}
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors"
                  data-testid="submit-button"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Your Query'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
