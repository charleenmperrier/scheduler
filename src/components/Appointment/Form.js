import React, { useState } from 'react';
import Button from 'components/Button';
import InterviewerList from 'components/InterviewerList';

export default function Form(props) {

  const [name, setName] = useState(props.name || '');

  const [error, setError] = useState('');

  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  
  const reset = () => {
    setName('');
    setInterviewer(null);
  }

  const cancel = () => {
    reset();
    props.onCancel();
  }

  function validate() {
    if (name === '') {
      setError("Student name cannot be blank")
      return;
    }
    setError('')
    props.onSave(name, interviewer);

  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            data-testid="student-name-input"
            // onSave={onSave}
            onSubmit={event => event.preventDefault()}
          />
          <section className='appointment__validation'>{error}</section>
        </form>
        <InterviewerList interviewers={props.interviewers} value={interviewer} onChange={(event) => setInterviewer(event)} />
      
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger alt="Cancel" onClick={cancel}>Cancel</Button>
          <Button confirm alt="Save" onClick={validate}>Save</Button>
        </section>
      </section>
    </main>
  )
}