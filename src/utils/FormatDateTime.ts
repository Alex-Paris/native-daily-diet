import ptBR from 'date-fns/locale/pt-BR';
import { format } from "date-fns";

export function formatDate(date?: Date) {
  if (!date) {
    return ''
  }
  return format(date, 'dd/MM/yyyy', { locale: ptBR })
}

export function formatTime(time?: Date) {
  if (!time) {
    return ''
  }
  return format(time, 'HH:mm', { locale: ptBR })
}