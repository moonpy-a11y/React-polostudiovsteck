# Polo Studio App v1.0

A modern React application for Polo Studio - offering premium polo equipment, professional coaching, and event management.

## Features

- **Home Page**: Hero section with service overview
- **Services**: Display of core offerings (lessons, equipment rental, team training, events)
- **Booking System**: User-friendly form to book lessons and services
- **Contact Information**: Location, phone, email, and business hours
- **Responsive Design**: Mobile-friendly interface for all devices
- **Modern UI**: Clean and professional styling with animations

## Project Structure

```
src/
├── components/
│   ├── Header.js
│   ├── Navigation.js
│   ├── HeroSection.js
│   ├── Services.js
│   ├── Booking.js
│   ├── Contact.js
│   └── Footer.js
├── styles/
│   ├── index.css
│   ├── App.css
│   ├── Header.css
│   ├── Navigation.css
│   ├── HeroSection.css
│   ├── Services.css
│   ├── Booking.css
│   ├── Contact.css
│   └── Footer.css
├── App.js
└── index.js
public/
└── index.html
```

## Getting Started

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## Technologies Used

- **React 18.2.0**: UI framework
- **CSS3**: Styling with animations and responsive design
- **HTML5**: Semantic markup

## Components Overview

### Header
Displays the Polo Studio logo and tagline with gradient background

### Navigation
Sticky navbar with navigation buttons for Home, Booking, and Contact sections

### HeroSection
Large banner section with call-to-action button

### Services
Grid layout showcasing four main services with icons and descriptions

### Booking
Comprehensive form for booking lessons with fields for name, email, phone, date, service type, and message

### Contact
Contact information including address, phone, email, and business hours

### Footer
Copyright information and social media links

## Styling Features

- Gradient backgrounds for visual appeal
- Smooth transitions and hover effects
- Mobile-first responsive design
- Accessibility-friendly color contrasts
- CSS animations for enhanced user experience

## Future Enhancements

- User authentication system
- Payment integration for bookings
- Gallery of polo events
- User profile management
- Blog/News section
- Advanced search and filtering
- Real-time booking availability
- Customer reviews and testimonials

## Version History

### v1.0.0
- Initial release with core features
- Responsive design implementation
- Basic booking system
- Service showcase

## License

This project is proprietary to Polo Studio.
