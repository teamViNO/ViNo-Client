import LookSvg from '@/assets/icons/look.svg?react';
import theme from '@/styles/theme';

const UserMode = () => {
  return (
    <div>
      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '11px 20px',
          borderWidth: 0,
          backgroundColor: theme.color.white,
        }}
      >
        <LookSvg width={28} height={28} />
        <span
          style={{
            color: theme.color.gray500,
            ...theme.typography.Subheader3,
            marginLeft: '10px',
          }}
        >
          최근 읽은 영상
        </span>
      </button>
    </div>
  );
};

export default UserMode;
