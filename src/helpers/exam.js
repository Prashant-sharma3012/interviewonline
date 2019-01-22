import getCodeContent from '../components/CodeContent'
import getTestCaseRunner from '../components/TestCaseRunner'

import { removeComments } from './object'

export const routes = [
  {
    path: '/exam1',
    title: 'How to determine if a variable is a string',
    content: getCodeContent(() => import(/* webpackChunkName: "exam1" */ '../exams/exam1/question.txt')),
    contentValidator(code) {
      return /function\s*isString\(value\)\s*{[\s\S]*}/.test(code)
    },
    contentIntegrityValidator(code) {
      const realCode = removeComments(code)
      return /^function\s*isString\(value\)\s*{[\s\S]*}$/.test(realCode)
    },
    testCase: getTestCaseRunner(() => import(/* webpackChunkName: "case1" */ '../exams/exam1/testcase'))
  },
  {
    path: '/exam2',
    title: 'Complete a simple currying function',
    content: getCodeContent(() => import(/* webpackChunkName: "exam2" */ '../exams/exam2/question.txt')),
    contentValidator(code) {
      return /function\s*currying\(func\)\s*{[\s\S]*}/.test(code)
    },
    contentIntegrityValidator(code) {
      const realCode = removeComments(code)
      return /^function\s*currying\(func\)\s*{[\s\S]*}$/.test(realCode)
    },
    testCase: getTestCaseRunner(() => import(/* webpackChunkName: "case2" */ '../exams/exam2/testcase'))
  },
  {
    path: '/exam3',
    title: 'Complete a duplicate function',
    content: getCodeContent(() => import(/* webpackChunkName: "exam3" */ '../exams/exam3/question.txt')),
    contentValidator(code) {
      return /function\s*duplicate\(array\)\s*{[\s\S]*}/.test(code)
    },
    contentIntegrityValidator(code) {
      const realCode = removeComments(code)
      return /^function\s*duplicate\(array\)\s*{[\s\S]*}$/.test(realCode)
    },
    testCase: getTestCaseRunner(() => import(/* webpackChunkName: "case3" */ '../exams/exam3/testcase'))
  },
  {
    path: '/exam4',
    title: 'Complete a map function',
    content: getCodeContent(() => import(/* webpackChunkName: "exam4" */ '../exams/exam4/question.txt')),
    contentValidator(code) {
      return /function\s*map\(arr,\s*func,\s*ctx\)\s*{[\s\S]*}/.test(code)
    },
    contentIntegrityValidator(code) {
      const realCode = removeComments(code)
      return /^function\s*map\(arr,\s*func,\s*ctx\)\s*{[\s\S]*}$/.test(realCode)
    },
    testCase: getTestCaseRunner(() => import(/* webpackChunkName: "case4" */ '../exams/exam4/testcase'))
  },
  {
    path: '/exam5',
    title: 'Complete a value function',
    content: getCodeContent(() => import(/* webpackChunkName: "exam5" */ '../exams/exam5/question.txt')),
    contentValidator(code) {
      return /function\s*value\(anything\)\s*{[\s\S]*}/.test(code)
    },
    contentIntegrityValidator(code) {
      const realCode = removeComments(code)
      return /^function\s*value\(anything\)\s*{[\s\S]*}$/.test(realCode)
    },
    testCase: getTestCaseRunner(() => import(/* webpackChunkName: "case5" */ '../exams/exam5/testcase'))
  }
]
