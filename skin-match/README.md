# skinMatch Frontend

A Next.js frontend application for the skinMatch platform - a personalized skincare product recommendation system.

## Overview

skinMatch helps users find the perfect skincare products based on their:
- Skin type
- Skin concerns
- Budget
- Ingredients to avoid
- And more!

This frontend connects to a Spring Boot backend that handles user authentication, product data, and the recommendation algorithm.

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Spring Boot, Java, JPA/Hibernate
- **Database**: H2 (development)

## Getting Started

### Prerequisites

- Node.js 14+ and npm
- Java 11+ (for backend)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/skinmatch-frontend.git
cd skinmatch-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Connecting to the Backend

The frontend is configured to connect to the Spring Boot backend running on port 8085. Make sure your backend server is running before testing features that require API calls.

## Current Features

- **Homepage**: Introduction to skinMatch
- **User Authentication**: Login & Signup functionality
- **Products Browsing**: View all products or filter by various criteria (in progress)
- **Skin Quiz**: Assessment to determine skin type and concerns (in progress)

## Project Structure

- `src/components/`: Reusable UI components
- `src/pages/`: Next.js pages
- `src/styles/`: Global styles and Tailwind CSS configuration
- `src/utils/`: Utility functions, including API client

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.