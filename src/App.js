import { gql, useMutation } from "@apollo/client";

const MUTATION = gql`
  mutation ($file: Upload!) {
    uploadBulkItems(file: $file, sellerId: 11) {
      code
      msg
      data
    }
  }
`;

function UploadFile() {
  const [mutate] = useMutation(MUTATION);

  function onChange({
    target: {
      validity,
      files: [file],
    },
  }) {
    if (validity.valid) mutate({ variables: { file } });
  }

  return <input type="file" required onChange={onChange} />;
}

export default function App() {
  return (
    <div>
      <h2>
        File Upload
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h2>
      <br />
      <UploadFile />
    </div>
  );
}
