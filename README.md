# Ken Mwangi Portfolio

A modern, responsive portfolio website built with Next.js 14, Tailwind CSS, and shadcn/ui components.

## Overview

This portfolio website showcases Ken Mwangi's work as a full-stack developer and UI/UX designer. The site features a clean, professional design with sections for portfolio projects, articles, case studies, and industry competence.

![Portfolio Screenshot](/public/assets/portfolio.png)

## Features

- **Responsive Design**: Optimized for all device sizes from mobile to desktop
- **Modern UI**: Clean, professional interface using shadcn/ui components
- **Tab Navigation**: Custom-styled tabs for easy section navigation
- **Portfolio Showcase**: Visual display of development and design projects
- **Articles Section**: Blog posts about web development and design
- **Case Studies**: Detailed information about previous client work
- **Industry Competence**: Overview of technical skills and industry experience

## Technologies Used

- **Next.js 14**: React framework for server-side rendering and static site generation
- **TypeScript**: Type-safe JavaScript for better developer experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: High-quality UI components built with Radix UI and Tailwind
- **Lucide Icons**: Beautiful open-source icons

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/kenmwangi/portfolio.git
   cd portfolio
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

\`\`\`
├── app/                  # Next.js app directory
│   ├── page.tsx          # Main portfolio page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/           # UI components
│   └── ui/               # shadcn/ui components
├── public/               # Static assets
│   └── assets/           # Images and other media
└── README.md             # Project documentation
\`\`\`

## Customization

### Adding New Projects

To add a new project to the portfolio section:

1. Create a new Card component in the portfolio TabsContent
2. Add project details, images, and links
3. Style as needed using Tailwind CSS classes

### Adding New Articles

To add a new article to the blog section:

1. Create a new Card component in the articles TabsContent
2. Add article title, description, and cover image
3. Link to the full article content

## Deployment

This project can be easily deployed to Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Configure any environment variables if needed
4. Deploy

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Ken Mwangi - [@ken_cipher](https://twitter.com/@ken_cipher) - [LinkedIn](https://www.linkedin.com/in/kkmwangi)

Project Link: [https://github.com/kenmwangi/portfolio](https://github.com/kenmwangi/portfolio)
