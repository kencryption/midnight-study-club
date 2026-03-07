const SubjectCard = ({ subject }) => {

  const openDrive = () => {
    window.open(subject.link, "_blank");
  };

  return (
    <div
      onClick={openDrive}
      className="bg-surface-hover rounded-lg p-4 border border-[#1c1c1f] hover:border-accent transition cursor-pointer"
    >
      {subject.name}
    </div>
  );
};

export default SubjectCard;