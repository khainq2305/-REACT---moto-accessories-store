import { Box, Pagination } from "@mui/material";

const PaginationComponent = ({ totalPages, currentPage, onChange }) => {
  if (totalPages <= 1) return null;

  return (
    <Box textAlign="center" mt={3}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(e, value) => onChange(value)}
        color="primary"
      />
    </Box>
  );
};

export default PaginationComponent;
