'use client'

import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

export function ROICalculator() {
  const [employees, setEmployees] = useState(100)
  const [avgHourlyRate, setAvgHourlyRate] = useState(50)
  const [companyType, setCompanyType] = useState<'nonregulated' | 'regulated'>('nonregulated')

  // Constants
  const EMAIL_HOURS_PER_DAY = 2.5
  const EFFICIENCY_GAIN = 0.35 // 35%
  const WORK_DAYS_PER_YEAR = 250
  const EDISCOVERY_COST_PER_GB = 18000
  const AUDIT_HOURS_SAVED_PER_EMPLOYEE = 4 // per year

  // Calculations
  const annualHoursSaved = employees * EMAIL_HOURS_PER_DAY * EFFICIENCY_GAIN * WORK_DAYS_PER_YEAR
  const timeSavingsValue = annualHoursSaved * avgHourlyRate
  const productivityValue = timeSavingsValue * 0.2 // 20% additional from reduced errors
  const complianceSavings = companyType === 'regulated' 
    ? (EDISCOVERY_COST_PER_GB * 0.3) + (employees * AUDIT_HOURS_SAVED_PER_EMPLOYEE * avgHourlyRate)
    : employees * AUDIT_HOURS_SAVED_PER_EMPLOYEE * avgHourlyRate * 0.5

  const totalAnnualValue = timeSavingsValue + productivityValue + complianceSavings

  const chartData = [
    { 
      name: 'Time Savings', 
      value: Math.round(timeSavingsValue),
      fill: '#FF0000'
    },
    { 
      name: 'Productivity', 
      value: Math.round(productivityValue),
      fill: '#000000'
    },
    { 
      name: 'Compliance', 
      value: Math.round(complianceSavings),
      fill: '#666666'
    },
  ]

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value)
  }

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border-2 border-black p-4">
          <div className="font-bold text-black mb-1">{payload[0].name}</div>
          <div className="text-2xl font-bold text-accent">{formatCurrency(payload[0].value)}</div>
        </div>
      )
    }
    return null
  }

  return (
    <div className="border-2 border-black p-8 bg-white">
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        {/* Input Controls */}
        <div className="space-y-8">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-4 text-black">
              Number of Employees
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="flex-1 h-2 appearance-none cursor-pointer focus:outline-none"
                style={{
                  background: `linear-gradient(to right, #FF0000 0%, #FF0000 ${((employees - 10) / 490) * 100}%, #F5F5F5 ${((employees - 10) / 490) * 100}%, #F5F5F5 100%)`
                }}
              />
              <div className="w-20 border border-black px-4 py-2 text-center font-bold text-black">
                {employees}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-4 text-black">
              Average Hourly Rate ($)
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="30"
                max="150"
                step="5"
                value={avgHourlyRate}
                onChange={(e) => setAvgHourlyRate(Number(e.target.value))}
                className="flex-1 h-2 appearance-none cursor-pointer focus:outline-none"
                style={{
                  background: `linear-gradient(to right, #FF0000 0%, #FF0000 ${((avgHourlyRate - 30) / 120) * 100}%, #F5F5F5 ${((avgHourlyRate - 30) / 120) * 100}%, #F5F5F5 100%)`
                }}
              />
              <div className="w-20 border border-black px-4 py-2 text-center font-bold text-black">
                ${avgHourlyRate}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-4 text-black">
              Company Type
            </label>
            <div className="flex gap-4">
              <button
                onClick={() => setCompanyType('nonregulated')}
                className={`flex-1 px-6 py-4 border-2 border-black font-bold uppercase text-sm transition-all cursor-pointer ${
                  companyType === 'nonregulated'
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-accent hover:text-white hover:border-accent'
                }`}
              >
                Non-Regulated
              </button>
              <button
                onClick={() => setCompanyType('regulated')}
                className={`flex-1 px-6 py-4 border-2 border-black font-bold uppercase text-sm transition-all cursor-pointer ${
                  companyType === 'regulated'
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-accent hover:text-white hover:border-accent'
                }`}
              >
                Regulated
              </button>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="space-y-6">
          <div className="border-l-4 border-accent pl-6">
            <div className="text-sm uppercase tracking-wider text-accent font-bold mb-2">
              Annual Hours Saved
            </div>
            <div className="text-5xl font-bold text-black">
              {Math.round(annualHoursSaved).toLocaleString()}
            </div>
            <div className="text-sm text-black mt-2">
              Equivalent to {Math.round(annualHoursSaved / (employees * 8))} work days per employee
            </div>
          </div>

          <div className="h-px bg-black" />

          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <span className="text-sm font-medium text-black">Time Savings Value</span>
              <span className="text-xl font-bold text-black">{formatCurrency(timeSavingsValue)}</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-sm font-medium text-black">Productivity Gains</span>
              <span className="text-xl font-bold text-black">{formatCurrency(productivityValue)}</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-sm font-medium text-black">Compliance Savings</span>
              <span className="text-xl font-bold text-black">{formatCurrency(complianceSavings)}</span>
            </div>
          </div>

          <div className="h-px bg-black" />

          <div className="bg-accent text-white p-6">
            <div className="text-sm uppercase tracking-wider font-bold mb-2">
              Total Annual Value
            </div>
            <div className="text-6xl font-bold">
              {formatCurrency(totalAnnualValue)}
            </div>
            <div className="text-sm mt-2 opacity-90">
              {formatCurrency(totalAnnualValue / employees)} per employee per year
            </div>
          </div>
        </div>
      </div>

      {/* Visualization */}
      <div className="border-t-2 border-black pt-8">
        <h4 className="text-xl font-bold mb-6 text-black">Value Breakdown</h4>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 60, bottom: 40 }}>
              <XAxis 
                dataKey="name" 
                stroke="#000000"
                style={{ 
                  fontSize: '14px',
                  fontWeight: 'bold',
                  fill: '#000000'
                }}
              />
              <YAxis 
                stroke="#000000"
                style={{ 
                  fontSize: '12px',
                  fill: '#000000'
                }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
              />
              <Tooltip 
                content={<CustomTooltip />}
                cursor={{ fill: '#F5F5F5' }}
              />
              <Bar 
                dataKey="value" 
                radius={[0, 0, 0, 0]}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Assumptions */}
      <div className="border-t-2 border-black pt-8 mt-8">
        <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-black">Calculation Assumptions</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="flex justify-between border-b border-black pb-2">
            <span className="text-black">Email hours per day</span>
            <span className="font-medium text-black">{EMAIL_HOURS_PER_DAY} hours</span>
          </div>
          <div className="flex justify-between border-b border-black pb-2">
            <span className="text-black">Efficiency gain</span>
            <span className="font-medium text-black">{(EFFICIENCY_GAIN * 100).toFixed(0)}%</span>
          </div>
          <div className="flex justify-between border-b border-black pb-2">
            <span className="text-black">Work days per year</span>
            <span className="font-medium text-black">{WORK_DAYS_PER_YEAR} days</span>
          </div>
          <div className="flex justify-between border-b border-black pb-2">
            <span className="text-black">Productivity multiplier</span>
            <span className="font-medium text-black">20%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
