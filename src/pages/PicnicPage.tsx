import React from 'react';
import { PicnicDedicatedPage } from '../components/picnic/PicnicDedicatedPage';

interface PicnicPageProps {
  onBackToHome: () => void;
  onOpenJeepBooking?: () => void;
}

/**
 * Dedicated Picnic Experience Page
 * Route: /picnic (or #picnic)
 * Container for all picnic packages, menu configurator, location, add-ons, pricing engine & booking flow.
 */
export const PicnicPage: React.FC<PicnicPageProps> = ({
  onBackToHome,
  onOpenJeepBooking,
}) => {
  return (
    <PicnicDedicatedPage
      onBackToHome={onBackToHome}
      onOpenJeepBooking={onOpenJeepBooking}
    />
  );
};

export default PicnicPage;
