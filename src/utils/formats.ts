import { format } from 'd3-format';
import { timeFormat } from 'd3-time-format';
import { Formats } from '@interfaces/index';
import { currencyFormatter } from './currency-formatter';

const formats: {
  [format in Formats]: (
    data: number | string | Date | { valueOf(): number },
    currency?: string,
  ) => string
} = {
  ['PERCENTAGE']: (data: number) => format('.0%')(data),
  ['GROUPED_TWO_DIGITS']: (data: number) => format('.2s')(data),
  ['GROUPED_THOUSANDS_TWO_DIGITS']: (data: number) => format(',.2r')(data),
  ['CURRENCY']: (data: number, currency: string) =>
    currencyFormatter(data, currency),
  ['SHORT_MONTH']: (data: number) => timeFormat('%b')(new Date(data * 1000)),
  ['LARGE_MONTH']: (data: number) => timeFormat('%B')(new Date(data * 1000)),
  ['DAY_AND_MONTH']: (data: number) =>
    timeFormat('%b %d')(new Date(data * 1000)),
  ['ANY']: (data: string | number) => `${data}`,
};

export { formats as Formats };
