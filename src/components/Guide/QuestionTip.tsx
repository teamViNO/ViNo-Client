type Props = {
  image: string;
  title: string | JSX.Element | JSX.Element[];
  description: string | JSX.Element | JSX.Element[];
  position: string;
};

const QuestionTip = ({ image, title, description, position }: Props) => {
  return (
    <div className="question-tip">
      <img src={image} alt="question-tip" />

      <div className="question-tip-content">
        <div>
          <h1>{title}</h1>
          <span className="description">{description}</span>
        </div>

        <span className="position">{position}</span>
      </div>
    </div>
  );
};

export default QuestionTip;
