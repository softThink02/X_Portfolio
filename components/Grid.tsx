import { gridItems } from "@/data/index";
import {HoverEffect} from './ui/card-hover-effect'

const Grid = () => {
  return (
    <section id="about">
      <HoverEffect items={gridItems} >
      </HoverEffect>
    </section>
  );
};

export default Grid;
