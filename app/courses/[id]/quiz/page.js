'use client';

import { Button } from '@/app/_components/button';
import { ButtonCustomChildren } from '@/app/_components/buttonCustomChildren';
import { Navbar } from '@/app/_sections/navbar';

import AddIcon from '@mui/icons-material/Add';
import { Slider } from '@/components/ui/slider';
import Plot from 'react-plotly.js';

import Link from 'next/link';

export default function Courses() {
  return (
    <main className="flex bg-white text-black">
      <Navbar />
      <section className="flex-1 grid grid-cols-2 gap-16 py-20 max-w-[960px] m-auto">
        <div className="flex flex-col gap-5">
          <Header />
          <RetentionLevel />
          <QuizHistory />
          <UtilityButtons />
        </div>
        <div className="flex flex-col gap-5">
          <TopGraph />
          <BottomGraph />
        </div>
      </section>
    </main>
  );
}

function Header() {
  return (
    <div>
      <p className="text-title-large text-light-on-surface-variant">Kuis</p>
      <h1 className="text-display-large font-bold">Graf Berbobot</h1>
      <p className="text-display-small text-light-on-surface-variant">
        Struktur Data
      </p>
    </div>
  );
}

function RetentionLevel() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-light-on-primary-container text-title-large font-bold">
        Kemahiran
      </h2>
      <Slider defaultValue={[50]} max={100} step={1} disabled={true} />
    </div>
  );
}

function QuizHistory() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-light-on-primary-container text-title-large font-bold">
        Riwayat Kuis
      </h2>
      <div className="flex flex-col gap-3 max-h-60 overflow-y-scroll">
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
      </div>
      <p>
        {'Lihat lebih lengkap di '}
        <Link href="/" className="font-bold">
          Analitik
        </Link>
      </p>
    </div>
  );
}

function QuestionItem() {
  return (
    <div className="w-full flex justify-between class bg-light-surface-container rounded-lg border-2 border-light-on-surface-variant gap-8 p-2">
      <p className="truncate">
        Jelaskan perbedaan antara graf berbobot dan graf tanpa bobot.
      </p>
      <p>Mudah</p>
    </div>
  );
}

function UtilityButtons() {
  return (
    <div className="w-full grid grid-cols-2 [&>*]:w-full [&>*]:h-full> gap-4">
      <Button text="Edit kuis" href="/" variant="outlined" />
      <Button text="Perbarui kuis" href="/" variant="outlined" />
      <Button
        text="Kerjakan kuis"
        className="col-span-2"
        href="/"
        variant="primary"
      />
    </div>
  );
}

function TopGraphHeader() {
  return (
    <div>
      <p class="text-title-small text-light-secondary">Pemahaman</p>
      <h2 class="text-title-large font-bold text-light-on-primary-container">
        7 Hari Terakhir
      </h2>
    </div>
  );
}

function TopGraph() {
  return (
    <div className="flex flex-col gap-2 shadow-lg rounded-lg p-6">
      <TopGraphHeader />
      <Plot
        data={[
          {
            x: ['06/06', '07/06', '08/06', '09/06', '10/06', '11/06', '12/06'],
            y: [0, 21, 32, 40, 40, 64, 70, 70],
            yaxis: 'y2',
            type: 'scatter',
            mode: 'lines',
            marker: { color: '#D6E3FF' },
            name: 'Pemahaman (%)',
          },
          {
            x: ['06/06', '07/06', '08/06', '09/06', '10/06', '11/06', '12/06'],
            y: [6, 3, 2, 0, 4, 1, 0],
            type: 'bar',
            name: 'Jumlah soal dikerjakan',
            marker: { color: '#3F5F90' },
          },
        ]}
        layout={{
          height: 300,
          margin: { t: 0, b: 0, r: 40, l: 40 },
          legend: { orientation: 'h' },
          xaxis: {
            showgrid: false,
          },
          yaxis: { title: 'Jumlah soal dikerjakan', showgrid: false },
          yaxis2: {
            title: 'Pemahaman (%)',
            // titlefont: { color: 'rgb(148, 103, 189)' },
            // tickfont: { color: 'rgb(148, 103, 189)' },
            side: 'right',
            overlaying: 'y',
            showgrid: false,
            zeroline: false,
          },
        }}
        config={{ staticPlot: false, responsive: true, displayModeBar: false }}
      />
    </div>
  );
}

function BottomGraphHeader() {
  return (
    <div>
      <p class="text-title-small text-light-secondary">Jadwal</p>
      <h2 class="text-title-large font-bold text-light-on-primary-container">
        7 Hari Ke Depan
      </h2>
    </div>
  );
}

function BottomGraph() {
  return (
    <div className="flex flex-col gap-2 shadow-lg rounded-lg p-6">
      <BottomGraphHeader />
      <Plot
        data={[
          {
            x: ['14/06', '15/06', '16/06', '17/06', '18/06', '19/06', '20/06'],
            y: [2, 0, 1, 0, 0, 0, 2],
            type: 'bar',
            marker: { color: '#3F5F90' },
            name: 'Jumlah soal',
          },
        ]}
        layout={{
          height: 150,
          margin: { t: 0, b: 40, r: 40, l: 40 },
          // legend: { orientation: 'h' },
          // xaxis: {
          //   showgrid: false,
          // },
          yaxis: { title: 'Jumlah soal', showgrid: false, range: [0, 2] },
        }}
        config={{ staticPlot: false, responsive: true, displayModeBar: false }}
      />
    </div>
  );
}
