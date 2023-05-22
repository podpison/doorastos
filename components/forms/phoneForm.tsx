import { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "yup-phone";
import cn from 'classnames';

type Props = {
  className?: string
  onSubmit?: () => void
}

const initialValues = {
  phone: '',
};

const validationSchema = Yup.object().shape({
  phone: Yup.string().phone('ru', true, 'Wrong format!').required(),
});

const PhoneForm: FC<Props> = ({ className, onSubmit }) => {
  return <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      console.log(values);
      onSubmit && onSubmit();
    }}
  >
    {({ isSubmitting, errors }) => (
      <Form className={cn('', className)}>
        <div className='flex flex-col gap-y-2.5'>
          <div className='group'>
            <Field
              className={cn(
                'text14 h-7 w-full border-b outline-none transition-colors',
                errors.phone ? 'text-red border-b-red placeholder:text-red' : 'border-b-grey1 group-hover:text-grey1',
              )}
              placeholder='Phone' type="phone" name="phone"
            />
          </div>
          <p className='text-tiny text-grey2'>
            By clicking on the send button, you agree to the terms of
            <a className='text-blue1 transition-colors cursor-pointer hover:text-blue2' href='/processingOfPersonalData' target='_blank'> personal data processing</a>
          </p>
        </div>
        <button
          className={cn(
            'text-esm font-light bg-blue1 text-white border border-blue1 rounded-full w-[90px] h-[90px] transition-all hover:bg-blue2 hover:border-blue2 active:bg-white active:text-black',
            errors.phone && 'opacity-80 pointer-events-none',
          )}
          type="submit"
          disabled={isSubmitting || errors.phone !== undefined}
        >
          Send
        </button>
      </Form>
    )}
  </Formik>
};

export default PhoneForm;