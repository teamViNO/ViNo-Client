const handleEdit = (
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: React.Dispatch<React.SetStateAction<string>>,
) => {
  if (e.target.value.length > 10) return;
  setValue(e.target.value);
};

export default handleEdit;
