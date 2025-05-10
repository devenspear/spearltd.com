interface Window {
  turnstile?: {
    render: (container: string | HTMLElement, options: {
      sitekey: string;
      callback: (token: string) => void;
      'expired-callback'?: () => void;
      'error-callback'?: (error: unknown) => void;
      theme?: 'light' | 'dark' | 'auto';
      tabindex?: number;
      size?: 'normal' | 'compact';
    }) => string;
    reset: (widgetId: string) => void;
    remove: (widgetId: string) => void;
  };
}
