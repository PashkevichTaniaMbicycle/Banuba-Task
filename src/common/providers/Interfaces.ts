import { SignalData } from 'simple-peer';

export interface ICall{
  signal: SignalData,
  from: string,
  isReceivingCall: boolean,
  name: string,
}
