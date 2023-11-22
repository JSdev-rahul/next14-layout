import { useEffect, useState } from 'react'
import { Input, Modal } from 'react-daisyui'
import { ModalHeader } from '../modal/Modal'
import UploadSection from './UploadSection'

const NewProjectModel = ({ isNewProjectModel, setIsNewProject }) => {
  const [projectName, setProjectName] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)
  const [placeholderText, setPlaceholderText] = useState('')
  const [textToType, setTextToType] = useState('Type something...')

  useEffect(() => {
    const interval = setInterval(() => {
      const slicedText = textToType.slice(0, placeholderText.length + 1)
      setPlaceholderText(slicedText)

      // Restart typing animation when the full text is typed
      if (slicedText === textToType) {
        setTimeout(() => {
          setPlaceholderText('')
        }, 200) // Delay before restarting typing animation (adjust as needed)
      }
    }, 300) // Adjust the interval for typing speed

    return () => clearInterval(interval)
  }, [placeholderText, textToType])
  return (
    <Modal
      open={isNewProjectModel}
      className="overflow-clip w-[821px] max-w-[821px] xl:max-w-[821px] max-h-fit"
    >
      <ModalHeader
        title="Start new project"
        closeButton={() => setIsNewProject(false)}
      />
      <Modal.Body className=" overflow-y-auto max-h-[90vh] space-y-4">
        <div>
          <div className="flex w-full px-[23px] pb-4 gap-2 font-sans">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Project name :</span>
              </label>

              <div className="w-full">
                <Input
                  style={{
                    border: `${
                      projectName?.length >= 1 ? 'none' : '1px solid red'
                    }`,
                    color: '#6900EF',
                  }}
                  disabled={isSubmit}
                  placeholder={placeholderText}
                  required={true}
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-[770px] h-[40px] outline-none"
                />
                {projectName?.length >= 1 ? null : (
                  <p
                    className="text-error"
                    style={{
                      marginTop: '1px',
                      fontSize: '9px',
                      fontWeight: '600',
                      lineHeight: '12px',
                    }}
                  >
                    *Project name required
                  </p>
                )}
              </div>
            </div>
          </div>

          <div>
            <UploadSection {...{ projectName, setIsSubmit }} />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default NewProjectModel
