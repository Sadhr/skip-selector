# Skip Selector - Modern React Application

A modern, responsive React application for selecting skip sizes for garden waste collection. Built with TypeScript, Material-UI, and Vite for optimal performance and user experience.

## 🚀 Live Demo

[View Live Application](https://skip-selector-liard.vercel.app/)

## 📋 Project Overview

This application redesigns the skip selection page for WeWantWaste, providing a completely new user interface while maintaining all original functionality. The design focuses on:

- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **Responsive Design**: Optimized for both mobile and desktop experiences  
- **Performance**: Fast loading with efficient data fetching
- **Accessibility**: WCAG compliant with proper semantic markup
- **Type Safety**: Full TypeScript implementation

## ✨ Key Features

### 🎨 Design & User Experience
- **Clean Modern Interface**: Professional, intuitive design for skip selection
- **Interactive Cards**: Hover effects and selection states
- **Multi-step Flow**: Skip selection → Placement selection → Photo upload
- **Success Notifications**: Toast notifications for action confirmations
- **Loading States**: Professional loading indicators and error handling

### 🔧 Functionality
- **Dynamic Data Fetching**: Real-time skip data from WeWantWaste API
- **Smart Filtering**: Filter by road placement availability
- **Flexible Sorting**: Sort by size or price with direction control (asc/desc)
- **Placement Options**: Choose between private property and public road
- **Photo Upload**: Optional photo upload for skip placement location
- **Price Calculation**: Automatic VAT calculation and total pricing

### 📱 Mobile-First Design
- **Touch-Friendly**: Large buttons and touch targets
- **Responsive Typography**: Scales appropriately across devices
- **Optimized Layouts**: Stack elements vertically on mobile
- **Fast Performance**: Optimized for mobile networks

## 🛠 Technical Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite (for fast development and building)
- **UI Library**: Material-UI (MUI) v6
- **HTTP Client**: Axios for API requests
- **Styling**: Emotion (CSS-in-JS) with Material-UI theming
- **Icons**: Material-UI Icons
- **State Management**: React Hooks (useState, useEffect, useMemo)

## 🏗 Architecture & Code Quality

### Custom Hooks
- `useSkips`: Manages API data fetching, loading states, and error handling
- `useSortAndFilter`: Handles skip sorting and filtering logic
- Utility functions centralized in `skipHelpers.ts`

### TypeScript Interfaces
- `Skip`: Complete type definition for skip data
- `SortConfig`: Type for sorting configuration (field + direction)
- Component prop types with proper interfaces

### Component Structure
```
src/
├── components/
│   ├── SkipCard.tsx             # Individual skip display card
│   ├── SkipSelector.tsx         # Main container component
│   ├── SkipGrid.tsx             # Grid layout for skip cards
│   ├── SelectionSummary.tsx     # Summary of selected skip(s)
│   ├── ControlPanel.tsx         # Sort/filter controls
│   ├── Header.tsx               # Page header
│   ├── PlacementSelector.tsx    # Skip placement selection page
│   ├── PhotoUploadModal.tsx     # Modal for photo upload
│   ├── SuccessToast.tsx         # Success notification
│   └── placement/               # Placement page components
│       ├── PlacementHeader.tsx
│       ├── PlacementOptions.tsx
│       ├── PlacementWarnings.tsx
│       ├── SkipSummary.tsx
│       └── ActionButtons.tsx
├── hooks/
│   ├── useSkips.ts              # Custom hook for data fetching
│   └── useSortAndFilter.ts      # Custom hook for sorting/filtering
├── utils/
│   └── skipHelpers.ts           # Utility functions
├── types/
│   └── Skip.ts                  # TypeScript type definitions
└── theme/
    └── theme.ts                 # MUI theme configuration
```

### Design Patterns
- **Modular Components**: Breaking down complex UI into focused components
- **Custom Hooks**: Reusable stateful logic
- **Composition**: Flexible component composition
- **Type Safety**: Comprehensive TypeScript coverage

## 🎯 UX/UI Features

### User Flow
1. **Skip Selection**: Browse and select a skip size
2. **Placement Selection**: Choose between private property or public road
3. **Photo Upload**: Optionally upload a photo of the placement location
4. **Confirmation**: Success notification and completion

### Visual Enhancements
1. **Consistent Design Language**: Unified styling across all pages
2. **Visual Hierarchy**: Clear typography scale and spacing
3. **Interactive Feedback**: Hover states and selection indicators
4. **Modal Dialogs**: Clean, focused modal for photo upload

### Accessibility & UX
1. **Progressive Disclosure**: Multi-step flow reveals information as needed
2. **Error Prevention**: Clear validation and warning messages
3. **Skip Options**: Option to bypass photo upload
4. **Clear Actions**: Distinct primary and secondary action buttons

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/skip-selector.git
   cd skip-selector
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 📊 API Integration

The application integrates with the WeWantWaste API:

**Endpoint**: `https://app.wewantwaste.co.uk/api/skips/by-location`

**Parameters**:
- `postcode`: Location postcode (default: "NR32")
- `area`: Area name (default: "Lowestoft")

**Response**: Array of skip objects with pricing, availability, and specifications

## 🎨 UI Components

### Skip Selection
- **SkipCard**: Individual skip display with pricing and features
- **SkipGrid**: Responsive grid layout for skip cards
- **ControlPanel**: Sort and filter options
- **SelectionSummary**: Selected skip details and price

### Placement Selection
- **PlacementOptions**: Private property and public road options
- **PlacementWarnings**: Conditional alerts for placement restrictions
- **SkipSummary**: Skip details and price summary
- **ActionButtons**: Navigation and progress buttons

### Photo Upload
- **PhotoUploadModal**: Modal dialog for photo upload
- **SuccessToast**: Notification for successful actions

## 🔄 Future Enhancements

### Potential Improvements
1. **Multi-skip Selection**: Allow selection of multiple skips
2. **Delivery Scheduling**: Calendar integration for delivery dates
3. **Address Input**: Form for delivery address collection
4. **Checkout Integration**: Payment processing
5. **Account Creation**: User registration and login
6. **Order History**: View past and pending orders

### Technical Enhancements
1. **Testing**: Unit and integration tests with Jest/RTL
2. **State Management**: Consider Redux for complex state
3. **Offline Support**: Cache data for offline viewing
4. **Analytics**: User behavior tracking
5. **A/B Testing**: Optimize conversion rates

## 🤝 Development Approach

### Methodology
- **Mobile-First**: Designed for mobile, enhanced for desktop
- **Progressive Enhancement**: Core functionality works everywhere
- **Accessibility-First**: WCAG 2.1 AA compliance
- **Performance Budget**: Optimized for fast loading

### Code Quality
- **TypeScript**: Full type safety
- **ESLint**: Code quality enforcement
- **Prettier**: Consistent code formatting
- **Component Documentation**: Clear prop interfaces

---

**Built with ❤️ using React, TypeScript, and Material-UI For REMWaste**
