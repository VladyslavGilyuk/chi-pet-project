interface Gradient {
  id: string;
  color: string;
  opacity: number;
}

interface LinearGradientsProps {
  gradients: Gradient[];
}

const LinearGradients: React.FC<LinearGradientsProps> = ({ gradients }) => {
  return (
    <>
      {gradients.map(({ id, color, opacity }) => (
        <linearGradient data-testid={id} key={id} id={id} x1='0' y1='0' x2='1' y2='0'>
          <stop offset='5%' stopColor={color} stopOpacity={opacity} />
          <stop offset='95%' stopColor={color} stopOpacity={0} />
        </linearGradient>
      ))}
    </>
  );
};

export default LinearGradients;
