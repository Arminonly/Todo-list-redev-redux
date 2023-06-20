import ExitBtn from './ExitBtn';
import FormBody from './FormBody';

const AddForm = ({showDrawer}) => {
  return (
    <>
      <ExitBtn 
      showDrawer={showDrawer} 
      />
      <FormBody />
    </>
  );
};

export default AddForm;
