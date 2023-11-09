import {  PNLData } from "./types"

export const formatDatesForGraphicFooter = (pnlData: PNLData): string => {

      const newDate = new Date(pnlData.date)
      const date =  ({
        year: newDate.getUTCFullYear(),
        month: (newDate.getUTCMonth() + 1) < 10 ? "0" + (newDate.getUTCMonth() + 1) : (newDate.getUTCMonth() + 1),
        day: (newDate.getUTCDate()) < 10 ? "0" + (newDate.getUTCDate()) : (newDate.getUTCDate()),
        hour: newDate.getUTCHours() < 10 ? "0" + newDate.getUTCHours() : newDate.getUTCHours(),
        min: newDate.getUTCMinutes() < 10 ? "0" + newDate.getUTCMinutes() : newDate.getUTCMinutes(),
        sec: newDate.getUTCSeconds() < 10 ? "0" + newDate.getUTCSeconds() : newDate.getUTCSeconds()
      })
      return `${date.year}-${date.month}-${date.day} ${date.hour}:${date.min}: ${date.sec}`
  }