import {Payslip} from "./Models";
import { v4 as uuidv4 } from 'uuid';
import {DateTime} from "luxon";

const DATA_LENGTH = 100;

const SAMPLE_PDF_URL = 'https://pdfobject.com/pdf/sample.pdf';

function generateRandomPayslip(): Payslip {
  const fromDate = DateTime.now().minus({ days: Math.floor(Math.random() * 365) }).toISODate();
  const toDate = DateTime.fromISO(fromDate).plus({ days: Math.floor(Math.random() * 30) }).toISODate();

  const id = uuidv4();

  const payslip: Payslip = {
    id: id,
    fromDate: fromDate,
    toDate: toDate || null,
    file: {
      id: 'File-' + id,
      name: `Payslip-${id}.pdf`,
      url: SAMPLE_PDF_URL
    }
  }
  return payslip;

}

//Produces an array of random payslip objects
export const getPayslips = (): Payslip[] => {

  const mockData: Payslip[] = [];

  for (let i = 0; i < DATA_LENGTH; i++) {
    mockData.push(generateRandomPayslip());
  }
  return mockData;
};

export const data = getPayslips();

export const getPayslip = (id: string) => {
  return data.find(p => p.id === id);
};
