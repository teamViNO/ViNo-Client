interface IBlurBackgroundProp {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BlurBackground = ({ setModalOpen }: IBlurBackgroundProp) => {
  const closeModal = () => setModalOpen(false);
  return (
    <div
      onClick={closeModal}
      style={{
        backgroundColor: 'rgba(0,0,0,0.16)',
        width: '100%',
        height: '100%',
        position: 'fixed',
        zIndex: 0,
        left: 0,
        top: 0,
      }}
    />
  );
};

export default BlurBackground;
