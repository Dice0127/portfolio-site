import { BeyondCodingIcon } from '../../icons';
import { CardHeader } from './DashboardParts';

function BeyondCodingCard({ beyondCoding }) {
  return (
    <div className="dcard dcard-beyond reveal">
      <CardHeader icon={<BeyondCodingIcon />} title="Beyond Coding" />
      <p className="dcard-text beyond-coding-text">{beyondCoding}</p>
    </div>
  );
}

export default BeyondCodingCard;
