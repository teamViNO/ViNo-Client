import theme from '@/styles/theme';

interface ISvgPropsType {
  width?: number;
  height?: number;
  footer?: boolean;
  darkMode?: boolean;
}

const SvgIcons = {
  MenuIcon: ({ width = 60, height = 60, darkMode }: ISvgPropsType) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.41699 7.91797H54.5837V12.0846H5.41699V7.91797Z"
        fill={darkMode ? theme.color.white : theme.color.gray500}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.41699 27.918H54.5837V32.0846H5.41699V27.918Z"
        fill={darkMode ? theme.color.white : theme.color.gray500}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.41699 47.918H54.5837V52.0846H5.41699V47.918Z"
        fill={darkMode ? theme.color.white : theme.color.gray500}
      />
    </svg>
  ),
  SearchIcon: ({ width = 60, height = 60, darkMode }: ISvgPropsType) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.7503 9.58268C15.9263 9.58268 9.58366 15.9253 9.58366 23.7493C9.58366 31.5734 15.9263 37.916 23.7503 37.916C31.5744 37.916 37.917 31.5734 37.917 23.7493C37.917 15.9253 31.5744 9.58268 23.7503 9.58268ZM5.41699 23.7493C5.41699 13.6241 13.6251 5.41602 23.7503 5.41602C33.8755 5.41602 42.0837 13.6241 42.0837 23.7493C42.0837 33.8746 33.8755 42.0827 23.7503 42.0827C13.6251 42.0827 5.41699 33.8746 5.41699 23.7493Z"
        fill={darkMode ? theme.color.white : theme.color.gray500}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.5 34.5547L52.9463 50.001L50 52.9472L34.5537 37.501L37.5 34.5547Z"
        fill={darkMode ? theme.color.white : theme.color.gray500}
      />
    </svg>
  ),
  NotifyOff: ({ width = 60, height = 60, darkMode }: ISvgPropsType) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.8663 46.6675C37.8663 51.27 34.1352 55.001 29.5327 55.001C24.9303 55.001 21.1992 51.27 21.1992 46.6675C21.1992 42.065 24.9303 38.334 29.5327 38.334C34.1352 38.334 37.8663 42.065 37.8663 46.6675Z"
        fill={theme.color.gray300}
      />
      <path
        d="M6.71725 39.5964C6.90274 38.8545 7.56937 38.334 8.33415 38.334H50.7316C51.4963 38.334 52.163 38.8545 52.3485 39.5964L54.0151 46.2631C54.2781 47.315 53.4825 48.334 52.3982 48.334H6.66749C5.5832 48.334 4.78761 47.315 5.05058 46.2631L6.71725 39.5964Z"
        fill={darkMode ? theme.color.gray400 : theme.color.gray500}
      />
      <path
        d="M14.3331 11.4374C14.4476 10.6134 15.1521 10 15.9839 10H43.0816C43.9135 10 44.618 10.6134 44.7324 11.4374L48.4361 38.1041C48.5753 39.1061 47.7969 40 46.7853 40H12.2802C11.2686 40 10.4903 39.1061 10.6294 38.1041L14.3331 11.4374Z"
        fill={darkMode ? theme.color.gray400 : theme.color.gray500}
      />
    </svg>
  ),
  NotifyOn: ({ width = 60, height = 60, darkMode }: ISvgPropsType) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.8663 46.6675C37.8663 51.27 34.1352 55.001 29.5327 55.001C24.9303 55.001 21.1992 51.27 21.1992 46.6675C21.1992 42.065 24.9303 38.334 29.5327 38.334C34.1352 38.334 37.8663 42.065 37.8663 46.6675Z"
        fill={theme.color.gray300}
      />
      <path
        d="M6.71725 39.5964C6.90274 38.8545 7.56937 38.334 8.33415 38.334H50.7316C51.4963 38.334 52.163 38.8545 52.3485 39.5964L54.0151 46.2631C54.2781 47.315 53.4825 48.334 52.3982 48.334H6.66749C5.5832 48.334 4.78761 47.315 5.05058 46.2631L6.71725 39.5964Z"
        fill={darkMode ? theme.color.gray400 : theme.color.gray500}
      />
      <path
        d="M14.3331 11.4374C14.4476 10.6134 15.1521 10 15.9839 10H43.0816C43.9135 10 44.618 10.6134 44.7324 11.4374L48.4361 38.1041C48.5753 39.1061 47.7969 40 46.7853 40H12.2802C11.2686 40 10.4903 39.1061 10.6294 38.1041L14.3331 11.4374Z"
        fill={darkMode ? theme.color.gray400 : theme.color.gray500}
      />
      <path
        d="M51.2003 13.3335C51.2003 17.936 47.4692 21.6671 42.8667 21.6671C38.2643 21.6671 34.5332 17.936 34.5332 13.3335C34.5332 8.73105 38.2643 5 42.8667 5C47.4692 5 51.2003 8.73105 51.2003 13.3335Z"
        fill={theme.color.green600}
      />
    </svg>
  ),
  Logo: ({ width = 646, height = 200, darkMode, footer }: ISvgPropsType) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 646 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_855_90575)">
        <path
          d="M56.0476 196.035L0 3.83398H45.8691L73.8929 115.929L83.9392 160.609H84.8645L94.6464 115.929L122.802 3.83398H168.672L112.624 196.035H56.0476Z"
          fill={
            footer
              ? theme.color.gray400
              : darkMode
                ? theme.color.white
                : theme.color.gray500
          }
        />
        <path
          d="M282.133 196.035V3.83398H335.801L391.188 118.044L405.861 158.229H406.786L401.234 108.923V3.83398H442.08V196.035H388.015L332.893 81.8247L319.013 45.2087H317.691L322.979 102.314V196.035H282.133Z"
          fill={
            footer
              ? theme.color.gray400
              : darkMode
                ? theme.color.white
                : theme.color.gray500
          }
        />
        <path
          d="M553.792 200C537.758 200 523.164 196.127 510.038 188.367C496.912 180.608 486.469 169.2 478.71 154.131C470.95 139.061 467.077 120.595 467.077 98.7442C467.077 76.8936 470.805 59.6563 478.247 44.9438C485.689 30.2313 495.934 19.0615 508.981 11.4342C522.028 3.80701 537.004 0 553.924 0C570.845 0 585.319 3.80701 598.406 11.4342C611.492 19.0615 621.843 30.2313 629.47 44.9438C637.097 59.6563 640.904 77.5942 640.904 98.7442C640.904 119.894 637.11 139.061 629.536 154.131C621.962 169.2 611.624 180.608 598.538 188.367C585.451 196.127 570.54 200 553.792 200ZM553.792 161.533C562.609 161.533 570.316 159.286 576.925 154.792C583.535 150.297 588.716 143.45 592.457 134.237C596.198 125.023 598.075 113.325 598.075 99.1408C598.075 85.7502 596.225 74.5539 592.523 65.5651C588.822 56.5763 583.64 49.8083 576.991 45.2743C570.329 40.7402 562.649 38.4666 553.924 38.4666C545.2 38.4666 538.168 40.7402 531.519 45.2743C524.87 49.8083 519.622 56.5763 515.788 65.5651C511.955 74.5539 510.038 85.7502 510.038 99.1408C510.038 109.808 511.135 119.061 513.343 126.9C515.55 134.739 518.63 141.216 522.596 146.332C526.562 151.447 531.215 155.254 536.542 157.766C541.869 160.278 547.619 161.533 553.792 161.533Z"
          fill={
            footer
              ? theme.color.gray400
              : darkMode
                ? theme.color.white
                : theme.color.gray500
          }
        />
        <path
          d="M251.386 73.9102H247.103H227.288H220.256H214.836V143.732H224.869H244.618H257.136V73.9102H251.386Z"
          fill={
            footer
              ? theme.color.gray400
              : darkMode
                ? theme.color.white
                : theme.color.gray500
          }
        />
        <path
          d="M247.591 193.245C250.697 191.394 253.063 188.869 254.676 185.684C256.289 182.498 257.095 178.889 257.095 174.858C257.095 170.826 256.289 167.085 254.676 163.912C253.063 160.74 250.697 158.255 247.591 156.444C244.484 154.633 240.69 153.721 236.209 153.721C231.728 153.721 227.683 154.659 224.497 156.55C221.312 158.44 218.893 160.978 217.254 164.164C215.614 167.349 214.795 170.905 214.795 174.818C214.795 178.731 215.614 182.524 217.254 185.71C218.893 188.896 221.312 191.407 224.497 193.245C227.683 195.095 231.583 196.008 236.209 196.008C240.836 196.008 244.471 195.082 247.591 193.218V193.245Z"
          fill={footer ? theme.color.gray400 : '#DFFF00'}
        />
        <path
          d="M178.654 16.5256L216.513 77.6228L231.529 73.6968L228.093 3.59766L178.654 16.5256Z"
          fill={
            footer
              ? theme.color.gray400
              : darkMode
                ? theme.color.white
                : theme.color.gray500
          }
        />
      </g>
      <defs>
        <clipPath id="clip0_855_90575">
          <rect width="646" height="200" fill={theme.color.white} />
        </clipPath>
      </defs>
    </svg>
  ),
  PlayIcon: ({ width = 60, height = 60 }: ISvgPropsType) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M53.3337 30.0013C53.3337 42.8879 42.887 53.3346 30.0003 53.3346C17.1137 53.3346 6.66699 42.8879 6.66699 30.0013C6.66699 17.1147 17.1137 6.66797 30.0003 6.66797C42.887 6.66797 53.3337 17.1147 53.3337 30.0013Z"
        fill={theme.color.gray500}
      />
      <path
        d="M41.667 30.8331L24.167 41.6584L24.167 20.0078L41.667 30.8331Z"
        fill={theme.color.white}
      />
    </svg>
  ),
  VideoIcon: ({ width = 40, height = 33 }: ISvgPropsType) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="20" y="20" width="21.6667" height="20" fill={theme.color.white} />
      <path 
        d="M6.66667 11.666H53.3333C54.2538 11.666 55 12.4122 55 13.3327V46.666C55 47.5865 54.2538 48.3327 53.3333 48.3327H6.66667C5.74619 48.3327 5 47.5865 5 46.666V13.3327C5 12.4122 5.74619 11.666 6.66667 11.666ZM23.75 38.6588L40 29.9985L23.75 21.3383L23.75 38.6588Z" 
        fill={theme.color.gray500} 
        />
    </svg>
  ),
};

export type KeyOfIcon = keyof typeof SvgIcons;

export default SvgIcons;
