import { masks } from '@utils/masks';
import dayjs from 'dayjs';
import * as yup from 'yup';
import { formatDate } from './helper/formatDate';

export const INPUTS = [
  {
    id: 1,
    name: 'name',
    autoCapitalize: 'words' as
      | 'none'
      | 'sentences'
      | 'words'
      | 'characters'
      | undefined,
    autoCorrect: false,
    keyboardType: 'default',
    placeholder: 'Digite o nome',
    returnKeyType: 'next',
    onChangeText: (value: string) => value,
  },
  {
    id: 2,
    name: 'rg',
    autoCapitalize: 'none' as
      | 'none'
      | 'sentences'
      | 'words'
      | 'characters'
      | undefined,
    autoCorrect: false,
    keyboardType: 'number-pad',
    placeholder: 'Digite o rg',
    returnKeyType: 'next',
    onChangeText: (value: string) => masks.rg(value).value,
    maxLength: masks.rg('').maxLength,
  },
  {
    id: 3,
    name: 'cpf',
    autoCapitalize: 'none' as
      | 'none'
      | 'sentences'
      | 'words'
      | 'characters'
      | undefined,
    autoCorrect: false,
    keyboardType: 'number-pad',
    placeholder: 'Digite seu cpf',
    returnKeyType: 'next',
    onChangeText: (value: string) => masks.cpf(value).value,
    maxLength: masks.cpf('').maxLength,
  },
  {
    id: 4,
    name: 'dateOfBirth',
    autoCapitalize: 'none' as
      | 'none'
      | 'sentences'
      | 'words'
      | 'characters'
      | undefined,
    autoCorrect: false,
    keyboardType: 'number-pad',
    placeholder: 'Digite a data de nascimento',
    returnKeyType: 'next',
    onChangeText: (value: string) => masks.date(value).value,
    maxLength: masks.date('').maxLength,
  },
  {
    id: 5,
    name: 'admissionDate',
    autoCapitalize: 'none' as
      | 'none'
      | 'sentences'
      | 'words'
      | 'characters'
      | undefined,
    autoCorrect: false,
    keyboardType: 'number-pad',
    placeholder: 'Digite a data de admissão',
    returnKeyType: 'next',
    onChangeText: (value: string) => masks.date(value).value,
    maxLength: masks.date('').maxLength,
  },
  {
    id: 6,
    name: 'role',
    autoCapitalize: 'none' as
      | 'none'
      | 'sentences'
      | 'words'
      | 'characters'
      | undefined,
    autoCorrect: false,
    keyboardType: 'default',
    placeholder: 'Digite a função',
    returnKeyType: 'next',
    onChangeText: (value: string) => value,
  },
];

export const schema = yup.object().shape({
  name: yup.string().required('O campo nome é obrigatório'),
  rg: yup.string().notRequired(),
  cpf: yup.string().notRequired(),
  dateOfBirth: yup
    .string()
    .required('Informe a data')
    .test('dateTest', 'Erro na data', (value) => {
      const dateValid = dayjs(formatDate(value));

      return dateValid.isValid();
    }),
  admissionDate: yup
    .string()
    .required('Informe a data')
    .test('dateTest', 'Erro na data', (value) => {
      const dateValid = dayjs(formatDate(value));

      return dateValid.isValid();
    }),
});
