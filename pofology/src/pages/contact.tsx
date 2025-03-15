import PageTitle from '@/components/shared/PageTitle';
import AppLayout from '@/layouts/AppLayout';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/form/Button';
import Input from '@/components/form/Input';
import TextArea from '@/components/form/Textarea';
type Props = {};

const Contact = (props: Props) => {
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
    <AppLayout title="contact">
      <PageTitle
        breadcrumb={[
          { label: 'Home', path: '/' },
          { label: 'Contact', path: '' },
        ]}
      >
        Contact
      </PageTitle>
      <div className="container py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="relative mb-10 h-48">
            <Image src="/images/map.svg" layout="fill" className="dark:invert" alt="map" />
            <h6 className="text-2xl font-bold">Contact with me</h6>
            <p className="mt-2">I would love to hear from you. 👋</p>
            <div className="mt-10 text-gray-400">
              <p>Surat</p>
              <p>Gujarat, India</p>
              <p>aabid.deraiya.5@gmail.com</p>
            </div>
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
      </div>
    </AppLayout>
  );
};

export default Contact;