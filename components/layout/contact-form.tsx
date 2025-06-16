"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <Input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="border-gray-200"
      />
      <Input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="border-gray-200"
      />
      <Textarea
        name="message"
        placeholder="Message"
        rows={4}
        value={formData.message}
        onChange={handleChange}
        required
        className="border-gray-200"
      />
      <Button type="submit" className="bg-gray-900 hover:bg-gray-800">
        Send Message
      </Button>
    </form>
  )
}
