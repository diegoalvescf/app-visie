import { IMaskTypeProps } from './IMaskTypeProps';
import { generateMaskRgxCpf } from './generateMaskRgxCpf';
import { generateMaskRgxDate } from './generateMaskRgxDate';
import { generateMaskRg } from './generateMaskRgxRg';

export const masks: IMaskTypeProps = {
  rg: generateMaskRg,
  cpf: generateMaskRgxCpf,
  date: generateMaskRgxDate,
};
