import Head from 'next/head'
import { useState } from 'react'
import BaseElementList from '@components/BaseElementList'
import FacetSummary from '@components/FacetSummary'
import { getExperienceBaseElements, getExperienceMetrics } from '@utils/fakeData'

export default function Experience() {
  const [baseElements, setBaseElements] = useState(getExperienceBaseElements())
  const [metrics, setMetrics] = useState(getExperienceMetrics())

  const handleUpdateBaseElements = (updatedBaseElements) => {
    setBaseElements(updatedBaseElements)
  }

  const handleUpdateMetrics = (updatedMetrics) => {
    setMetrics(updatedMetrics)
  }

  return (
    <div>
      <Head>
        <title>Experience - Base Elements</title>
        <meta name="description" content="Base elements for the Experience facet" />
      </Head>

      <main>
        <h1>Experience Base Elements</h1>

        <FacetSummary
          facetName="Experience"
          baseElements={baseElements}
          metrics={metrics}
          customTags = {metrics}
          onUpdateBaseElements={handleUpdateBaseElements}
          onUpdateMetrics={handleUpdateMetrics}
        />

        <BaseElementList
          baseElements={baseElements}
          facetName="experience"
          onUpdateBaseElements={handleUpdateBaseElements}
        />
      </main>
    </div>
  )
}