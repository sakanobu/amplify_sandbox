/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
      review_id
      owner
      book_title
      author_name
      review
      company_expense_flag
      name
      category
      image
      created_at
      updated_at
      id
      createdAt
      updatedAt
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        review_id
        owner
        book_title
        author_name
        review
        company_expense_flag
        name
        category
        image
        created_at
        updated_at
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
