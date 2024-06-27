import { TextField, Select, SubmitBtn } from '@/components/form';
import sc from 'styled-components';
import { SyntheticEvent, useState } from 'react';

interface FormProps {
  onSubmit: (_data: Record<string, string>) => void;
}

const Form = ({ onSubmit }: FormProps) => {
  const [errors, setErrors] = useState({
    fullname: '',
      email: '',
      familiar_ai: '',
      familiar_xai: '',
      familiar_dt: '',
  });

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    setErrors({
        fullname: !formData.get('fullname') ? 'Familiarity is required' : '',
        email: !formData.get('email') ? 'Familiarity is required' : '',
        familiar_ai: !formData.get('familiar_ai') ? 'Familiarity is required' : '',
      familiar_xai: !formData.get('familiar_xai') ? 'Familiarity is required' : '',
      familiar_dt: !formData.get('familiar_dt') ? 'Familiarity is required' : '',
    });

    const fullname = formData.get('fullname') ?? '';
    const email = formData.get('email') ?? '';
    const familiar_ai = formData.get('familiar_ai') ?? '';
    const familiar_xai = formData.get('familiar_xai') ?? '';
    const familiar_dt = formData.get('familiar_dt') ?? '';
    if (familiar_ai && familiar_xai && familiar_dt) {
      onSubmit({ fullname, email,  familiar_ai, familiar_xai, familiar_dt} as Record<string, string>);
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <TextField
        id={'fullname'}
        label={'Full name'}
        placeholder={'Enter fullname'}
        name={'fullname'}
        error_message={errors['fullname']}
        has_error={errors['fullname'].length > 0}
      />
      <TextField
        id={'email'}
        label={'Email'}
        name={'email'}
      />
      <Select
        name={'familiar_ai'}
        label={'AI familiarity'}
        options={[
          { label: 'Professor', value: 'professor' },
          { label: 'Post Graduate in relevant degree', value: 'post' },
          { label: 'Undergraduate in relevant degree', value: 'under' },
          { label: 'Some familiarity', value: 'some' },
            {label: 'Unfamiliar', value: 'unfamiliar'}
        ]}
        error_message={errors['familiar_ai']}
        has_error={errors['familiar_ai'].length > 0}
      />
        <Select
        name={'familiar_xai'}
        label={'XAI familiarity'}
        options={[
          { label: 'Professor', value: 'professor' },
          { label: 'Post Graduate in relevant degree', value: 'post' },
          { label: 'Undergraduate in relevant degree', value: 'under' },
          { label: 'Some familiarity', value: 'some' },
            {label: 'Unfamiliar', value: 'unfamiliar'}
        ]}
        error_message={errors['familiar_xai']}
        has_error={errors['familiar_xai'].length > 0}
      />
        <Select
        name={'familiar_dt'}
        label={'Decision Trees familiarity'}
        options={[
          { label: 'Professor', value: 'professor' },
          { label: 'Post Graduate in relevant degree', value: 'post' },
          { label: 'Undergraduate in relevant degree', value: 'under' },
          { label: 'Some familiarity', value: 'some' },
            {label: 'Unfamiliar', value: 'unfamiliar'}
        ]}
        error_message={errors['familiar_dt']}
        has_error={errors['familiar_dt'].length > 0}
      />
      <SubmitBtn type={'submit'}>Submit</SubmitBtn>
    </FormWrapper>
  );
};

export default Form;

const FormWrapper = sc.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;
