import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/form/Button';
import Input from '@/components/form/Input';
import TextArea from '@/components/form/Textarea';
import SectionTitle from '@/components/shared/SectionTitle';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('https://script.google.com/macros/s/AKfycbzT5fBgIHpZeM4urBQgxmqCC_xpzNH9fpW-4s8jeJC7eoSIG5vCE-KJhWboUqBbVTI/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    alert('Message sent successfully!');
  };

  return (
    <>
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <div className="relative h-48">
          <Image src="/images/map.svg" layout="fill" className="dark:invert" alt="map" />
          <h6 className="text-2xl font-bold">Let's talk about everything!</h6>
          <p className="mt-2">Don't like forms? Send me an email. 👋</p>
        </div>
        <div className="col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-8 md:grid-cols-2">
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mt-8">
              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="mt-8">
              <TextArea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="mt-8">
              <Button className="mt-5 bg-primary-500 px-8 font-semibold text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200" type="submit">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
