import * as React from "react";

export const GlassesIcon: React.FC<Props> = ({ size, color, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_76:451)">
      <path
        d="M8.4 7.20001C7.57813 7.20001 7.05 7.80001 6.45 8.77501C5.80313 9.82814 0.659375 21.1844 0.0750006 22.475C0.0375006 22.5594 0.034375 22.6406 0.0250006 22.725C0.021875 22.7688 -0.00312498 22.8063 5.9756e-07 22.85C-0.00312498 22.8844 5.9756e-07 22.9219 5.9756e-07 22.95C5.9756e-07 23.6906 0.625001 23.9938 0.925001 24.125C1.31875 24.3031 1.6 24.4094 1.6 25.35C1.6 29.3344 4 33.6 10.725 33.6C15.8219 33.6 18.4 30.6406 18.4 24.8V22.825C18.7219 22.6438 19.2938 22.4 20 22.4C20.7094 22.4 21.2781 22.6438 21.6 22.825V24.8C21.6 30.6406 24.1781 33.6 29.275 33.6C36 33.6 38.4 29.3938 38.4 25.45C38.4 24.4656 38.6875 24.3344 39.075 24.175C39.3531 24.0594 40 23.8063 40 23.05C40 23 39.9813 22.9344 39.975 22.875C39.9906 22.7375 39.9875 22.6094 39.925 22.475C39.3406 21.1844 34.2 9.82814 33.55 8.77501C32.95 7.80001 32.4219 7.20001 31.6 7.20001C30.8281 7.20001 30.3219 7.76251 29.725 8.70001C29.2625 9.47189 28.9313 9.94064 28.925 9.95001C28.6781 10.3188 28.7813 10.8313 29.15 11.075C29.5156 11.3219 30.0281 11.2156 30.275 10.85C30.275 10.85 30.5938 10.3531 31.075 9.55001C31.3625 9.09689 31.5406 8.90001 31.625 8.82501C31.7094 8.90001 31.8844 9.11251 32.2 9.62501C32.6063 10.2813 35.4656 16.5 37.7 21.425C36.1406 21.0656 33.5313 20.8 29.125 20.8C27.4406 20.8 25.6938 21.0781 24.15 21.325C23.6125 21.4125 23.0844 21.5094 22.6 21.575C22.1438 21.2844 21.2125 20.8 20 20.8C18.7875 20.8 17.8563 21.2844 17.4 21.575C16.9156 21.5094 16.3875 21.4125 15.85 21.325C14.3063 21.0781 12.5594 20.8 10.875 20.8C6.46563 20.8 3.85938 21.0719 2.3 21.425C4.53438 16.5 7.39688 10.2813 7.8 9.62501C8.12813 9.08751 8.3125 8.88751 8.375 8.82501C8.45625 8.89689 8.6375 9.07501 8.925 9.52501C9.41563 10.3438 9.725 10.85 9.725 10.85C9.96875 11.2156 10.4813 11.3188 10.85 11.075C11.2188 10.8313 11.3188 10.3188 11.075 9.95001C11.0688 9.94064 10.75 9.49064 10.275 8.70001C9.6875 7.78126 9.17188 7.20001 8.4 7.20001Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_76:451">
        <rect width={40} height={40} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

GlassesIcon.defaultProps = {
  size: 40,
  color: '#BEBEBE',
}

type Props = {
  size?: number,
  color?: string,
}