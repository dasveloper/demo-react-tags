import './App.css';
import React, { useCallback, useRef, useState } from 'react'
import ReactTags from 'react-tag-autocomplete'

/**
 * Demo 1 - Country selector
 */

function App () {
  const [tags, setTags] = useState([])

  const reactTags = useRef()

  const onDelete = useCallback((tagIndex) => {
    setTags(tags.filter((_, i) => i !== tagIndex))
  }, [tags])

  const onAddition = useCallback((newTag) => {
    setTags([...tags, newTag])
  }, [tags])

  const onValidate = useCallback((newTag) => {
    return /^[a-z]{3,12}$/i.test(newTag.name)
  })

  return (
    <>
      <p>Enter new tags meeting the requirements below:</p>
      <label>
        My label 
        <ReactTags
          allowNew
          newTagText='Create new tag:'
          ref={reactTags}
          tags={tags}
          suggestions={[]}
          onDelete={onDelete}
          onAddition={onAddition}
          onValidate={onValidate}
        />
      </label>
      <p style={{ margin: '0.25rem 0', color: 'gray' }}>
        <small><em>Tags must be 3–12 characters in length and only contain the letters A-Z</em></small>
      </p>
      <p><b>Output:</b></p>
      <pre><code>{JSON.stringify(tags, null, 2)}</code></pre>
    </>
  )
}

export default App