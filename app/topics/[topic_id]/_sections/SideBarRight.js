'use client';

import Image from 'next/image';
import Plot from 'react-plotly.js';

import { AddMaterialModal } from '../_components/AddMaterialModal';
import { AddMaterialModalContextProvider } from '../_components/AddMaterialModalContext';
import { AddMaterialButton } from '../_components/AddMaterialButton'; 
import { Credits } from '@/app/_components/Credits';

export function SideBarRight() {
  return (
    <div className="w-full px-8 py-10 flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <AddTopic />
        <Credits />
      </div>
      <CardUnderstandingLevel />
      <CardNextSchedule />
    </div>
  );
}

function AddTopic() {
  return (
    <AddMaterialModalContextProvider>
      <AddMaterialModal />
      <AddMaterialButton />
    </AddMaterialModalContextProvider>
  );
}

function CardUnderstandingLevel() {
  return (
    <div className="rounded-3xl py-5 px-10 flex flex-col gap-4 border-2 border-[#C6C6D0]">
      <div className="flex flex-col">
        <span>Pemahaman</span>
        <span className="font-extrabold text-2xl">7 Hari Terakhir</span>
      </div>
      <Plot
        data={[
          {
            x: ['07/06', '08/06', '09/06', '10/06', '11/06', '12/06'], // X-axis (date format)
            y: [20, 15, 25, 18, 14, 18], // Y-axis (understanding level percentage)
            type: 'scatter',
            mode: 'lines+markers',
            fill: 'tozeroy', // Fill the area under the curve
            marker: { color: '#3F5F90' }, // Red markers at data points
            line: { shape: 'spline' }, // Smooth curve
          },
        ]}
        layout={{
          // title: 'Understanding Level Over Time',
          xaxis: {
            title: 'Date',
            tickformat: '%d/%m', // Format x-axis ticks as day/month
          },
          yaxis: {
            // title: 'Understanding Level (%)',
            range: [0, 30], // Set y-axis range
            tickmode: 'linear', // Linear ticks
            tick0: 0,
            dtick: 10,
          },
          margin: {
            t: 0,
            r: 20,
            b: 36,
            l: 20,
          },
          showlegend: false, // Hide the legend
        }}
        config={{
          responsive: true, // Make the chart responsive
        }}
        style={{ width: '100%', height: 220 }} // Chart dimensions
      />
    </div>
  );
}

function CardNextSchedule() {
  return (
    <div className="rounded-3xl py-5 px-10 flex flex-col gap-4 border-2 border-[#C6C6D0]">
      <div className="flex flex-col">
        <span>Jadwal</span>
        <span className="font-extrabold text-2xl">7 Hari Ke Depan</span>
      </div>
      <Plot
        data={[
          {
            x: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'], // X-axis (days of the week)
            y: [7, 3, 8, 6, 11, 2, 6], // Y-axis values
            type: 'bar', // Bar chart
            marker: {
              color: '#D6E3FF', // Light blue color for bars
            },
          },
        ]}
        layout={{
          title: 'Weekly Data',
          xaxis: {
            title: 'Days of the Week',
            tickmode: 'array',
            tickvals: [0, 1, 2, 3, 4, 5, 6],
          },
          yaxis: {
            // title: 'Value',
            // range: [0, 15], // Set y-axis range
            tickmode: 'linear',
            tick0: 0,
            dtick: 5,
          },
          margin: {
            t: 0,
            r: 20,
            b: 36,
            l: 20,
          },
          bargap: 0.2, // Gap between bars
          showlegend: false, // Hide legend
        }}
        config={{
          responsive: true, // Make chart responsive
        }}
        style={{ width: '100%', height: 220 }} // Chart dimensions
      />
    </div>
  );
}
