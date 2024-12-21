import { currentPage } from '../index'
import { closeMenu } from './menu'

export function displayCurrentPage (current) {
  currentPage.innerHTML = current()
  closeMenu()
  return currentPage
}
