import React from 'react'
import { render, screen } from '@testing-library/react';
import App from './App';
import ContactForm from '../src/components/ContactForm';

test('renders App without errors', () => {
    render(<App />)
})

test('input field place holder shows to user', () => {
    render(<ContactForm />)

    const firstNamePlaceHolder = screen.getByPlaceholderText(/Edd/i)

    expect(firstNamePlaceHolder).toBeInTheDocument();
})

test('last name text element found', () => {
    render(<ContactForm />)
    const lastName = screen.getByText("Last Name*")
    expect(lastName).toBeInTheDocument()
})