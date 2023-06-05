export type IMaskTypeProps = {
  rg(value: string): IMaskTypeReturn;
  cpf(value: string): IMaskTypeReturn;
  date(value: string): IMaskTypeReturn;
};

export type IMaskTypeReturn = { value: string; maxLength: number };
