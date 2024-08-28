import person from "./person.png";
import elephan from "./Elephan.png";
import ballon from "./ballon.png";
import { ReactNode } from "react";

interface SidebarItemProps {
  icon: ReactNode;
  content: string;
}

interface TableRowProps {
  subject: string;
  author: string;
  reunionType: string;
  date: string;
}

function SidebarItem({ icon, content }: SidebarItemProps) {
  return (
    <li>
      <a
        href="#"
        className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
      >
        <div className="rounded shadow-lg bg-white w-10 h-10 flex items-center text-center justify-center">
          {icon}
        </div>
        <span className="flex-1 ms-3 whitespace-nowrap">{content}</span>
      </a>
    </li>
  );
}

function TableRow({ subject, author, reunionType, date }: TableRowProps) {
  return (
    <tr className="bg-white border-b hover:bg-gray-50 ">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <p>{subject}</p>
        <p className="italic text-gray-500">por {author}</p>
      </th>
      <td className="px-6 py-4">{reunionType}</td>
      <td className="px-6 py-4">{date}</td>
    </tr>
  );
}

const sidebarItems = [
  {
    icon: (
      <svg
        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 fill-current"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M458.666667 597.333333A96 96 0 0 1 554.666667 693.333333v64.085334l-0.341334 4.608c-13.226667 90.752-94.72 134.357333-231.466666 134.357333-136.234667 0-219.050667-43.093333-236.928-132.778667L85.333333 757.333333v-64A96 96 0 0 1 181.333333 597.333333h277.333334zM320 256a149.333333 149.333333 0 1 1 0 298.666667 149.333333 149.333333 0 0 1 0-298.666667z m522.666667-170.666667A96 96 0 0 1 938.666667 181.333333v149.333334A96 96 0 0 1 842.666667 426.666667h-66.261334l-108.416 94.165333A42.666667 42.666667 0 0 1 597.333333 488.618667V426.069333a96 96 0 0 1-85.333333-95.402666v-149.333334A96 96 0 0 1 608 85.333333h234.666667z" />
      </svg>
    ),
    content: "Time",
  },
  {
    icon: (
      <svg
        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 fill-current"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M838.4 325.12 554.24 479.36C528 493.44 512 521.6 512 552.96l0 298.24c0 32 31.36 53.12 57.6 38.4l284.16-154.24c25.6-14.08 42.24-42.24 42.24-73.6L896 364.16C896 331.52 864.64 311.04 838.4 325.12zM405.76 478.72 121.6 325.12C95.36 311.04 64 331.52 64 363.52l0 299.52c0 31.36 16 59.52 42.24 73.6l284.16 153.6C416.64 904.32 448 883.2 448 851.2L448 552.32C448 520.96 432 492.8 405.76 478.72zM812.16 255.36c13.44-7.04 19.84-19.2 18.56-30.72 1.28-12.16-5.12-23.68-18.56-30.72L522.88 42.88c-12.8-7.04-28.16-10.24-43.52-10.24-15.36 0-30.72 3.2-43.52 10.24L146.56 193.28C133.12 200.32 127.36 212.48 128 224 127.36 236.16 133.12 248.32 146.56 255.36l289.28 150.4c12.8 7.04 28.16 10.24 43.52 10.24 15.36 0 30.72-3.2 43.52-10.24L812.16 255.36z" />
      </svg>
    ),
    content: "Biblioteca",
  },
  {
    icon: (
      <svg
        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 fill-current"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M900 276.6l-95.4 97-5.4 5.6-3.2 3.4c-2.2 1.6-4.8 2.4-7.8 2.4-3.2 0-6.2-1.2-8.6-3.2l-1.8-1.8-5.4-5.4-82.6-84.2-4.4-4.4-3.4-3.4c-2-3-3.2-6.8-3.2-10.6 0-3.4 1.2-6.4 3.2-8.8l1.4-1.6 5.2-5.2 95.8-97.4c-10.2-20.2-49.4-29.8-70.2-28.2-34.2 2.6-69.4 14-105.6 51-1.4 1.6-3 3.2-4.4 4.6C555 240 545.2 312 565.2 378c1.4 2.8 2.6 6.2 3.2 9.2 2.2 11-0.8 20.4-8 27l-75.8 72.8c-23.6-24-27-27.2-27-27.2-4-4-12-6.6-19-2.4l-11.8 7.2c-45.4-46.2-64.6-64.8-70.8-87.2-6.4-23.4-0.6-54.6 5.4-66.2 5-9.2 20.6-17.8 33.8-18.8l17.2 17.6c4 4 10.2 4 14.2 0l61.8-62.8c4-4 4-10.6 0-14.6l-99.8-101.4c-4-4-10.4-4-14.2 0l-61.8 62.8c-4 4-4 10.6 0 14.6l6.6 6.8c0 9.8-1.4 25-9.4 33.2-12.4 12.6-37-2-53 9.4-15.8 11.2-35.8 29.2-48.6 42-12.6 12.8-61 63.6-95.6 149.2-34.6 85.6-8 165 10.8 185.8 10 11 28.2 22.2 25 1.4-3.2-21-8.4-93.8 15.4-123.6 23.8-29.8 55.2-54.2 96-56.2 39.2-2 61.8 11.4 112.6 63l-5.6 10.4c-3.6 6.8-1.6 15.4 2.4 19.4 0 0 3 3.2 24.2 24.8l-194.4 186.4c-32.4 28.6-30.6 81-0.6 112 30.4 30.4 82.2 32.6 110.4-0.4l182.8-197.2c98.2 104.6 186.6 214.8 186.6 214.8 4 4 10.4 4 14.2 0l99.8-101.4c4-4 4-10.4 0-14.6 0 0-110.4-91.4-214-192.4l71-76.6c6.6-7.4 15.8-10.4 26.6-8.2 3 0.6 6.2 2 9 3.4 64.8 20.4 135.6 10.4 188-39.6 1.6-1.4 3-3 4.6-4.6 36.2-36.8 47.4-72.8 50-107.6C929.4 327 920.4 287.6 900 276.6z" />
      </svg>
    ),
    content: "Integrações",
  },
];

const headers = ["Reuniões", "Prompt", "Criado em"];

const rows = [
  {
    subject: "Entrevista para vaga de Front-End na Elephan",
    author: "Henrique Machado",
    reunionType: "Entrevista",
    date: "26, Ago 2024",
  },
  {
    subject: "Weekly 2608",
    author: "Artur Santos",
    reunionType: "Reunião geral",
    date: "26, Ago 2024",
  },
  {
    subject: "Daily Tech 2608",
    author: "Artur Santos",
    reunionType: "Reunião geral",
    date: "26, Ago 2024",
  },
  {
    subject:
      "Reunião sobre integração e funcionalidades Elephan - Fernanda - Thomas Brasil",
    author: "Thais Sterenberg",
    reunionType: "Primeiro contato de qualificação",
    date: "23, Ago 2024",
  },
  {
    subject: "Discussão sobre melhorias de UI na Elephan",
    author: "Artur Santos",
    reunionType: "Reunião geral",
    date: "23, Ago 2024",
  },
  {
    subject: " Explicação sobre a antecipação de dividendos - Diego e Samuel.",
    author: "Thais Sterenberg",
    reunionType: "Reunião geral",
    date: "23, Ago 2024",
  },
  {
    subject: "Demonstração e Teste da Ferramenta Elephan",
    author: "Thais Sterenberg",
    reunionType: "Primeiro contato de qualificação",
    date: "23, Ago 2024",
  },
  {
    subject: "Demonstração da ferramenta Elefante para B2B Hotel",
    author: "Thais Sterenberg",
    reunionType: "Primeiro contato de qualificação",
    date: "23, Ago 2024",
  },
];

function App() {
  return (
    <div className="w-full bg-[#f8f9fa]">
      <aside
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#f8f9fa]">
          <div className="border-b">
            <a
              href="https://elephan.ai/"
              className="flex items-center ps-2.5 mb-5"
            >
              <img src={elephan} className="h-10 me-3" alt="Elephan" />
            </a>
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg bg-white group mt-4 shadow-lg"
              >
                <div className="rounded shadow-lg bg-[#4dc2b5] w-10 h-10 flex items-center text-center justify-center">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 fill-white"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M691.2 460.8C620.6464 460.8 563.2 403.3536 563.2 332.8S620.6464 204.8 691.2 204.8 819.2 262.2464 819.2 332.8 761.7536 460.8 691.2 460.8z m0-204.8c-42.3424 0-76.8 34.4576-76.8 76.8S648.8576 409.6 691.2 409.6 768 375.1424 768 332.8 733.5424 256 691.2 256zM25.6 1024a25.5488 25.5488 0 0 1-24.064-34.304c78.7968-216.6272 161.6384-326.5024 246.1696-326.5024 27.904 0 53.9648 11.9808 77.568 35.5328 37.2736 37.2736 38.6048 74.3936 33.1776 98.9696-17.1008 77.2096-126.1568 152.832-324.096 224.8192a26.112 26.112 0 0 1-8.7552 1.536z m222.1568-309.6576c-25.344 0-55.1936 22.2208-86.272 64.256-30.5664 41.3184-61.2864 100.1984-91.5456 175.4624 68.352-27.4944 123.2896-55.3984 163.7888-83.2 54.6304-37.5296 70.8096-66.56 74.752-84.2752s-2.4064-34.6624-19.4048-51.6608c-13.824-13.824-27.3408-20.5312-41.3696-20.5312z" />
                    <path d="M998.4 0c-132.864 0-251.2384 22.528-351.9488 66.9696-82.9952 36.6592-154.0608 88.064-211.2512 152.8832-10.6496 12.0832-20.5312 24.32-29.696 36.608-44.1344 2.9184-89.2928 20.48-134.3488 52.224-38.144 26.8288-76.4416 64-113.92 110.4384-62.976 78.0288-101.6832 154.9824-103.3216 158.208a25.6 25.6 0 0 0 40.96 29.5936c0.256-0.256 24.7296-24.32 66.4576-47.9232 34.4064-19.456 87.4496-42.3424 151.6032-46.3872 16.2304 41.5232 62.6688 91.1872 84.9408 113.4592s71.936 68.7104 113.4592 84.9408c-4.0448 64.1536-26.9312 117.1968-46.3872 151.6032-23.6544 41.7792-47.6672 66.2016-47.872 66.4064a25.6512 25.6512 0 0 0 29.5424 41.0112c3.2256-1.6384 80.1792-40.3456 158.208-103.3216 46.4384-37.4784 83.6096-75.776 110.4384-113.92 31.744-45.1072 49.2544-90.2144 52.224-134.3488 12.2368-9.1136 24.4736-18.9952 36.608-29.696 64.8192-57.1904 116.224-128.256 152.8832-211.2512 44.4416-100.6592 66.9696-219.0848 66.9696-351.9488v-25.6h-25.6zM159.0784 502.1696c48.7936-70.8096 123.392-158.6176 207.4624-186.2144-33.2288 58.2144-50.432 111.6672-56.6272 145.5616a398.5408 398.5408 0 0 0-150.8352 40.6528z m362.8032 362.5984a397.3632 397.3632 0 0 0 40.6016-150.7328c33.8432-6.1952 87.3472-23.3984 145.5104-56.576-27.648 83.9168-115.4048 158.5152-186.1632 207.3088z m248.3712-314.368C663.7568 644.352 553.472 665.6 537.6 665.6c-0.1024 0-10.5984-0.2048-38.8608-20.1216-19.712-13.8752-42.7008-33.6384-64.6144-55.552s-41.6768-44.9024-55.552-64.6144c-19.9168-28.2624-20.1216-38.7584-20.1216-38.8608 0-15.872 21.248-126.1568 115.2-232.6528 112.4352-127.3856 284.5184-197.0688 498.8928-202.24-5.1712 214.3744-74.8032 386.4576-202.24 498.8928z" />
                  </svg>
                </div>

                <span className="ms-3 font-bold">Reuniões</span>
              </a>
            </li>
            {sidebarItems.map((item) => (
              <SidebarItem {...item} />
            ))}
          </ul>
          <div className="bg-[#76b8c2] p-4 rounded-lg mt-3 mx-3">
            <div className="rounded shadow-lg bg-white w-7 h-7 flex items-center text-center justify-center mb-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 fill-[#76b8c2]"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 1024C229.216 1024 0 794.752 0 512 0 229.216 229.216 0 512 0 794.752 0 1024 229.216 1024 512 1024 794.752 794.752 1024 512 1024ZM473.28 826.752 551.328 826.752 551.328 747.488 473.28 747.488 473.28 826.752ZM655.008 243.616C618.88 211.84 571.584 196 512.96 196 457.696 196 412.064 212.16 376.096 244.448 340.16 276.736 319.808 320.384 315.072 375.392L396.288 375.392C407.968 297.536 445.568 275.392 512.224 275.392 546.368 275.392 575.584 269.12 596.672 290.144 617.792 311.136 628.352 337.856 628.352 370.304 628.352 386.912 624.448 402.688 616.704 417.472 608.896 432.288 588.96 453.536 556.896 481.152 524.8 508.768 502.816 534.816 490.88 559.232 478.944 583.616 472.832 616.768 472.832 669.216L551.616 669.216C551.616 629.44 550.176 606.304 557.952 589.216 565.728 572.192 586.688 549.248 620.832 520.48 655.008 491.712 678.272 465.504 690.624 441.792 702.944 418.112 709.152 392.448 709.152 364.8 709.152 315.712 691.104 275.296 655.008 243.616Z" />
              </svg>
            </div>
            <p className="text-white">Precisa de ajuda?</p>
            <p className="text-white text-[12px]">Veja nossa Central</p>
            <button className="bg-white w-full mt-3 rounded-lg py-1.5 shadow-lg text-[#6b7990] hover:text-gray-900">
              Documentação
            </button>
          </div>
        </div>
      </aside>

      <div className="absolute left-[256px]">
        <div className="flex justify-end text-center items-center py-4 gap-1 bg-[#f8f9fa]">
          <img src={person} />
          Henrique Machado
        </div>
        <div className="w-[1450px] rounded shadow-lg bg-white">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Reuniões</div>
            <p className="text-gray-700 text-base">
              Encontre aqui todas as suas reuniões
            </p>
          </div>
          <div className="flex px-6 pt-4 pb-2 w-full">
            <div className="flex justify-between w-full">
              <div className="flex items-center">
                <select className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100px] p-2.5 h-fit">
                  <option>50</option>
                  <option>100</option>
                  <option>150</option>
                  <option>200</option>
                  <option>250</option>
                </select>
                <span className="ml-2 text-gray-500">
                  transcrições por página
                </span>
              </div>
              <div className="flex gap-4">
                <select className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 blockw-[200px]  p-2.5 pr-10 h-fit">
                  <option>Últimos 7 dias</option>
                  <option>Últimos 14 dias</option>
                  <option>Último mês</option>
                </select>
                <select className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 pr-10 h-fit">
                  <option selected>Filtrar por usuário</option>
                  <option>Artur Santos</option>
                  <option>Thais Sterenberg</option>
                  <option>Henrique Machado</option>
                </select>

                <input
                  type="search"
                  className="block w-[300px] p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 h-fit"
                  placeholder="Buscar..."
                />
              </div>
            </div>
          </div>

          <div className="relative overflow-x-auto mt-3">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase">
                <tr>
                  {headers.map((header) => (
                    <th scope="col" className="px-6 py-3">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <TableRow {...row} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4 z-50">
        <button className="bg-[#4dc2b5] text-white p-4 rounded-full shadow-lg focus:outline-none focus:ring-2">
          <img src={ballon}></img>
        </button>
      </div>
    </div>
  );
}

export default App;
