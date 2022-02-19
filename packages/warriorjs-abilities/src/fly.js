import { FORWARD } from '@warriorjs/geography';

const defaultDirection = FORWARD;

function fly({ range = 2 }) {
  return unit => ({
    action: true,
    description: `Moves multiple space in the given direction (\`'${defaultDirection}'\` by default).`,
    perform(direction = defaultDirection) {
      unit.move(direction, range);
      unit.log(`flies ${direction}`);
    },
  });
}

export default fly;
