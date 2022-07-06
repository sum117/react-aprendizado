import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import {format} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { formatDistanceToNow } from "date-fns/esm";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export function formatDate(date = Date) {
  return {
    raw: format(date, 'd \d\e LLLL \à\s HH:mm \h', {locale: ptBR}),
    relative: formatDistanceToNow(date, {locale: ptBR, addSuffix: true}),
    iso: date.toISOString()
  };
}